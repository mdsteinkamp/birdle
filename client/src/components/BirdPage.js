import { useEffect } from "react"

export default function BirdPage({ bird, onClickNext }) {

  useEffect(() => {
    async function findBirdImage() {
      try {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyB63JcEgZiiMGD_svwC8lA0IqNFvtZC0Eg&cx=e2e6b1e2c14314732:omuauf_lfve&searchType=image&q=${bird.name}`)

        const image = await response.json()
        console.log(image)
      } catch (error) {
        console.log(error)
      }
      }
  })

  function handleNextBird() {
    onClickNext()

  }
  console.log(bird)

  return(
    (bird.images.length < 1) ? handleNextBird() :
    <div>
      <h2>{bird.name}</h2>
      <img src={bird.images[0]} width={500} aspect-ratio={1 / 1} alt="bird?" />
      <button onClick={handleNextBird}>Next bird</button>

    </div>

  )
}