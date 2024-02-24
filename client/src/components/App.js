import { useState, useEffect } from 'react';
import Queue from '../Queue';
import '../App.css';
import BirdPage from './BirdPage'


export default function App() {
  const [birdsList, setBirdsList] = useState(null)

  const birds = new Queue

  async function findBird() {
      const id = Math.floor(Math.random() * (1069)) + 1
      console.log(id)
      try {
        const response = await fetch(`https://nuthatch.lastelm.software/birds/${id}`, {
          headers: {
            'api-key': 'd1521ee8-8e26-427a-b001-3f26f7de08e2'
          }
        })
        if (!response.ok) {
          console.log(response.statusText, id)
          findBird()
        }
        const bird = await response.json()
        birds.enqueue(bird)
        setBirdsList(birds)
      } catch(error) {
        console.log(error)
      }
  }

  useEffect(() => {
    for(let i = 0; i < 5; i++) {
      findBird()
    }
  }, [])

  function handleClick() {
    birds.dequeue()
    findBird()
  }

  return (
    (!birdsList) ? null : 
    <div className="App">
      <h1>Welcome to the BIRDLE</h1>
      <BirdPage bird={birdsList.first.data} onClick={handleClick} />
    </div>
  );
}

