import { useState, useEffect } from 'react';
import Queue from '../Queue';
import '../App.css';
import BirdPage from './BirdPage'

const birds = new Queue

export default function App() {
  const [birdsList, setBirdsList] = useState(null)
  const [nextBird, setNextBird] = useState(null)


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
          console.log(bird)
          setBird(bird)
          return nextBird
          // return birds
          setBirdsList(birds)
        }
      } catch(error) {
        console.log(error)
      }
  }

  useEffect(() => {
    for(let i = 0; i < 5; i++) {
      findBird(bird => birds.enqueue(bird))
    }
  }, [])

  // const nums = [1, 2, 3, 4, 5, 6]
  // console.log(nums.filter(num => num < 4))

  function handleNextBird() {
    birds.dequeue()
    setBirdsList(birds)
    findBird()
  }

  console.log(birds)
  console.log(birds.first)

  return (
    (!birds) ? null : 
    <div className="App">
      <h1>Welcome to the BIRDLE</h1>
      {/* <BirdPage bird={birdsList.first.data} onClick={handleClick} /> */}
      {/* <h2>{birds.first.data.name}</h2>
      <img src={birds.first.data.images[0]} width={500} aspect-ratio={1 / 1} alt="bird?" />
      <button onClick={handleNextBird}>Next bird</button> */}
    </div>
  );
}

