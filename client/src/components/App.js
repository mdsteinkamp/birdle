import { useState, useEffect } from 'react';
import Queue from '../Queue';
import '../App.css';


export default function App() {
  const [bird, setBird] = useState(null)

  useEffect(() => {
    fetch('https://nuthatch.lastelm.software/birds/100', {
    headers: {
      'api-key': 'd1521ee8-8e26-427a-b001-3f26f7de08e2'
    }
  })
  .then((resp) => {
      if (resp.ok) {
        resp.json().then((bird) => setBird(bird));
      }
    });
  }, [])

  console.log(bird)


  return (
    <div className="App">
      <h1>Welcome to the BIRDLE</h1>

    </div>
  );
}