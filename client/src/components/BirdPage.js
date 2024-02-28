import birdNames from "../BirdNamesArray"

export default function BirdPage({ bird, onClickNext }) {

  console.log(birdNames.birdNames1[Math.floor(Math.random() * birdNames.birdNames1.length)])

  function handleNextBird() {
    onClickNext()

  }
  console.log(bird)
  const fakeBirdNames = []
  // for(const value in Object.keys(birdNames)) {
  //   console.log(value)
  //   // fakeBirdNames.push(birdArray[Math.floor(Math.random() * birdArray.length)])
  // }
  Object.values(birdNames).forEach(value => fakeBirdNames.push(value[Math.floor(Math.random() * value.length)]))
  console.log(fakeBirdNames)

  return(
    <div>
      <h2>{bird.name}</h2>
      <img src={bird.images[0]} width={500} aspect-ratio={1 / 1} alt="bird?" />
      <button onClick={handleNextBird}>Next bird</button>

    </div>

  )
}