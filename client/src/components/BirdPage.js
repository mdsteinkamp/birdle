import { useEffect, useState } from "react"

export default function BirdPage({ bird, onClickNext }) {
  const [image, setImage] = useState(null)

  useEffect(() => {
    async function getImages() {
      try {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyB63JcEgZiiMGD_svwC8lA0IqNFvtZC0Eg&cx=e2e6b1e2c14314732&searchType=image&q=${bird.name}`)

        const images = await response.json()
        console.log(images)
        setImage(images.items[0].link)
      } catch (error) {
        console.log(error)
      }
    }
    getImages()
  }, [bird])

  function handleNextBird() {
    onClickNext()

  }
  console.log(bird)
  console.log(image)

  return(
    (bird.images.length < 1) ? handleNextBird() :
    <div>
      <h2>{bird.name}</h2>
      <img src={image} width={500} aspect-ratio={1 / 1} alt="bird?" />
      <button onClick={handleNextBird}>Next bird</button>

    </div>

  )
}