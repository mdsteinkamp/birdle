import { useState, useEffect } from 'react';
import Queue from '../Queue';
import '../App.css';
import BirdPage from './BirdPage'

const birds = new Queue

export default function App() {
  const [birdsList, setBirdsList] = useState({current: {}, next: {}})
  const [start, setStart] = useState(false)
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
    setBirdsList({current: {}, next: {}})
    for(let i = 0; i < 5; i++) {
      findBird(bird => birds.enqueue(bird))
    }
  }, [])

  function handleNextBird() {
    console.log("fetching next bird")
    birds.dequeue()
    // console.log(birds)
    // setBirdsList(birds)
    findBird(bird => birds.enqueue(bird))
    console.log(birds)
    setBirdsList({current: birds.first.data, next: birds.first.next.data})
  }

  function handleStart() {
    setBirdsList({current: birds.first.data, next: birds.first.next.data})
    setStart(true)
  }

  console.log(birds)
  console.log(birds.first)
  console.log(birdsList)

  return (
    <div className="App">
      <h1>Welcome to the BIRDLE</h1>
      <button onClick={handleStart}>Start Game</button>
      {(!start) ? null : <BirdPage bird={birdsList.current} onClickNext={handleNextBird} />}
    </div>
  );
}

{/* <BirdPage bird={birdsList.current.data} onClickNext={handleNextBird} /> */}