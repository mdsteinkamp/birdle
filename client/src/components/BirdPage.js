export default function BirdPage({ bird, onClick }) {

  function handleNextBird() {
    onClick()

  }


  return(
    <div>
      <h2>{bird.name}</h2>
      <button onClick={handleNextBird}>Next bird</button>

    </div>

  )
}