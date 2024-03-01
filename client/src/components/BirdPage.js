import birdNames from "../BirdNamesArray"
import BirdTestForm from "./BirdTestForm"

export default function BirdPage({ bird, onClickNext }) {

  function handleNextBird() {
    onClickNext()

  }
  console.log(bird)
  const fakeBirdNames = []
  Object.values(birdNames).forEach(value => fakeBirdNames.push(value[Math.floor(Math.random() * value.length)]))
  const cleanedFakeBirdNames = fakeBirdNames.filter(name => name !== bird.name)

  return(
    <div>
      {/* <h2>{bird.name}</h2> */}
      <img src={bird.images[0]} width={500} aspect-ratio={1 / 1} alt="bird?" />
      <BirdTestForm trueName={bird.name} fakeNames={cleanedFakeBirdNames} />

      <button onClick={handleNextBird}>Next bird</button>
    </div>

  )
}