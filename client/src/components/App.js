import { useState, useEffect } from 'react';
import Queue from '../Queue';
import '../App.css';


export default function App() {
  const [bird, setBird] = useState(null)

  const birds = new Queue

  async function findBird() {
    for(let i = 0; i < 5; i++) {
      const id = Math.floor(Math.random() * (1069)) + 1
      console.log(id)
      try {
        const response = await fetch(`https://nuthatch.lastelm.software/birds/${id}`, {
          headers: {
            'api-key': 'd1521ee8-8e26-427a-b001-3f26f7de08e2'
          }
        })
        if (response.ok) {
          const bird = await response.json()
          birds.enqueue(bird)
          console.log(birds)
        }
      } catch(error) {
        console.log(error)
      }

    }
  }

  useEffect(() => {
    findBird()
  }, [])

  console.log(birds)


  return (
    <div className="App">
      <h1>Welcome to the BIRDLE</h1>

    </div>
  );
}

// const response = await fetch(`https://nuthatch.lastelm.software/birds/${id}`, {
//   headers: {
//     'api-key': 'd1521ee8-8e26-427a-b001-3f26f7de08e2'
//   }})