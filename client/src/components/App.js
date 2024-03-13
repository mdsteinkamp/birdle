import { useState, useEffect } from 'react';
import Queue from '../Queue';
import '../App.css';
import EasyModeBirdPage from './BirdPage'

const birds = new Queue

export default function App() {
  const [birdsList, setBirdsList] = useState({current: {}, next: {}})
  const [start, setStart] = useState(false)
  const [visibleBird, setVisibleBird] = useState(null)
  // const [count, setCount] = useState(0)

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
          findBird(bird => birds.enqueue(bird))
        } else {
          const bird = await response.json()
          const allowedProperties = ["name", "images", "recordings"]
          const filteredBird = Object.fromEntries(
            Object.entries(bird).filter((([k, v]) => allowedProperties.includes(k))
          ))
          console.log(filteredBird)
          setBird(bird)
          // setBirdsList(birds)
          console.log(birds.length)
          birds.length === 1? getFirstImage() : getImages()
          // getImages()

        }
      } catch(error) {
        console.log(error)
      }
  }

  useEffect(() => {
    for(let i = 0; i < 2; i++) {
      findBird(bird => birds.enqueue(bird))

    }
  }, [])

  async function getFirstImage() {
    console.log("getting first bird image")
    try {
      const firstBirdResponse = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_SEARCH_API_KEY}&cx=e2e6b1e2c14314732&searchType=image&q=${birds.first.data.name}`)

      const images = await firstBirdResponse.json()
      console.log(images)
      birds.first.data.images[0] = images.items[0].link
      birds.first.data.images[1] = images.items[1].link
      birds.first.data.images[2] = images.items[2].link

      setBirdsList(birds)
    } catch (error) {
      console.log(error)
    }
  }

  async function getImages() {
      console.log("getting next bird image")
      try {
        const secondBirdResponse = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_SEARCH_API_KEY}&cx=e2e6b1e2c14314732&searchType=image&q=${birds.first.next.data.name}`)
  
        const images = await secondBirdResponse.json()
        birds.first.next.data.images[0] = images.items[0].link
        birds.first.next.data.images[1] = images.items[1].link
        birds.first.next.data.images[2] = images.items[2].link
        
      } catch (error) {
        console.log(error)
      }
  }

  function handleNextBird() {
    console.log("fetching next bird")
    birds.dequeue()
    console.log(birds)
    setBirdsList(birds)
    // console.log(birdsList)
    findBird(bird => birds.enqueue(bird))
    // console.log(birds)
    setVisibleBird(birds.first)
    setBirdsList(birds)
  }

  function handleStart() {
    setBirdsList(birds)
    console.log(birds)
    setStart(true)
  }

  return (
    <div className="App">
      <h1>Welcome to the BIRDLE</h1>
      {(!start) ? <button onClick={handleStart}>EASY MODE</button> : null}
      {(!start) ? null : <EasyModeBirdPage bird={birdsList.first.data} onClickNext={handleNextBird} />}
    </div>
  );
}
