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

  function handleSubmit(selectedBird) {
    console.log(selectedBird)
    if (!selectedBird) {
      alert("no bird selected")
    } else if (selectedBird === bird.name) {
      alert("Yay that's correct!")
      handleNextBird()
    } else {alert("SORRY 😂 Try again!")}
  }

  return(
    <div>
      {/* <h2>{bird.name}</h2> */}
      <img src={bird.images[0]} width={500} aspect-ratio={1 / 1} alt="bird?" />
      <BirdTestForm trueName={bird.name} fakeNames={cleanedFakeBirdNames} onSubmit={handleSubmit} />

      <button onClick={handleNextBird}>Next bird</button>
    </div>

  )
}