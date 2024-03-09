import { useState } from "react"
import birdNames from "../BirdNamesArray"
import BirdTestForm from "./BirdTestForm"

export default function BirdPage({ bird, onClickNext }) {
  const [imageNumber, setImageNumber] = useState(0)

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
    } else {
      alert("SORRY 😂 Try again!")

    }
  }

  function nextBirdImage() {
    imageNumber < 2 ? setImageNumber(imageNumber => imageNumber + 1) : setImageNumber(imageNumber => imageNumber - 2)

  }
  console.log(imageNumber)

  return(
    <div>
      {/* <h2>{bird.name}</h2> */}
      <img src={bird.images[imageNumber]} width={390} aspect-ratio={1 / 1} alt="bird?" />
      <br />
      <button onClick={nextBirdImage}>Next Image</button>
      <BirdTestForm trueName={bird.name} fakeNames={cleanedFakeBirdNames} onSubmit={handleSubmit} onHandleNextBird={handleNextBird}/>

      {/* <button onClick={handleNextBird}>Next bird</button> */}
    </div>

  )
}