import { useState, useEffect } from 'react';
import Queue from '../Queue';
import '../App.css';


export default function App() {
  const [bird, setBird] = useState(null)

  const birds = new Queue

  function findBird() {
    for(let i = 0; i < 5; i++) {
      const id = Math.floor(Math.random() * (1069)) + 1
      console.log(id)
      
      fetch(`https://nuthatch.lastelm.software/birds/${id}`, {
        headers: {
          'api-key': 'd1521ee8-8e26-427a-b001-3f26f7de08e2'
        }
      })
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((bird) => birds.enqueue(bird));
        }
      })
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