import birdNames from "../BirdNamesArray"

export default function BirdPage({ bird, onClickNext }) {

  console.log(birdNames)

  function handleNextBird() {
    onClickNext()

  }
  console.log(bird)

  return(
    <div>
      <h2>{bird.name}</h2>
      <img src={bird.images[0]} width={500} aspect-ratio={1 / 1} alt="bird?" />
      <button onClick={handleNextBird}>Next bird</button>

    </div>

  )
}