export default function BirdPage({ bird, onClick }) {

  function handleNextBird() {
    onClick()

  }
  console.log(bird)

  return(
    (bird.images.length == 0) ? handleNextBird() :
    <div>
      <h2>{bird.name}</h2>
      <img src={bird.images[0]} width={250} aspect-ratio={1 / 1} alt="bird?" />
      <button onClick={handleNextBird}>Next bird</button>

    </div>

  )
}