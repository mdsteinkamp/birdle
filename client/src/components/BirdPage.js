import { useEffect, useState } from "react"

export default function BirdPage({ bird, secondBird, onClickNext }) {
  const [image, setImage] = useState(null)

  // useEffect(() => {
  //   async function getImages() {
  //     try {
  //       const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_SEARCH_API_KEY}&cx=e2e6b1e2c14314732&searchType=image&q=${bird.name}`)

  //       const images = await response.json()
  //       console.log(images)
  //       setImage(images.items[0].link)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getImages()
  // }, [bird])

  function handleNextBird() {
    onClickNext()

  }
  console.log(bird)
  console.log(image)

  return(
    <div>
      <h2>{bird.name}</h2>
      <img src={bird.images[0]} width={500} aspect-ratio={1 / 1} alt="bird?" />
      <button onClick={handleNextBird}>Next bird</button>

    </div>

  )
}