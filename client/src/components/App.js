import { useState, useEffect } from 'react';
import Queue from '../Queue';
import '../App.css';
import BirdPage from './BirdPage'

const birds = new Queue

export default function App() {
  const [birdsList, setBirdsList] = useState(null)
  const [visibleBird, setVisibleBird] = useState(null)

  async function findBird(setBird) {
      const id = Math.floor(Math.random() * (1069)) + 1
      try {
        const response = await fetch(`https://nuthatch.lastelm.software/birds/${id}`, {
          headers: {
            'api-key': 'd1521ee8-8e26-427a-b001-3f26f7de08e2'
          }
        })
        if (!response.ok) {
          console.log(response, id)
          findBird()
        } else {
          const bird = await response.json()
          setBird(bird)
          setBirdsList(birds)
        }
      } catch(error) {
        console.log(error)
      }
  }

  useEffect(() => {
    setVisibleBird(birds.first)
    for(let i = 0; i < 5; i++) {
      findBird(bird => birds.enqueue(bird))
    }
  }, [])

  function handleNextBird() {
    birds.dequeue()
    setBirdsList(birds)
    findBird(bird => birds.enqueue(bird))
  }

  console.log(birds)
  console.log(birds.first)

  return (
    (birds.length < 5) ? null : 
    <div className="App">
      <h1>Welcome to the BIRDLE</h1>
      <BirdPage bird={birds.first} onClick={handleNextBird} />
    </div>
  );
}

