import { useEffect, useState } from "react"

export default function BirdTestForm({ trueName, fakeNames, onSubmit, onHandleNextBird }) {

  // console.log(trueName, fakeNames)
  const [shuffledNames, setShuffledNames] = useState([])
  const [checked, setChecked] = useState([false, false, false, false, false])
  const [selectedBird, setSelectedBird] = useState(null)

  function createBirdNamesArray() {
    let shuffled = fakeNames
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  
    const finalNames = shuffled.slice(0, 4)
    finalNames.push(trueName)
    // console.log(finalNames)
  
    let shuffledFinalNames = finalNames
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
    
    setShuffledNames(shuffledFinalNames)
  }

  useEffect(() => {
    createBirdNamesArray()
    setChecked([false, false, false, false, false])
  }, [trueName])

  function handleChecked(position, e) {
    const updatedChecked = checked.map((item, index) => index === position ? !item : false)
    // console.log(updatedChecked)
    setChecked(updatedChecked)
    setSelectedBird(e.target.value)
  }

  function handleSubmit() {
    // console.log(checked)
    const allFalse =  !checked.some(value => value === true)
    // console.log(allFalse)
    allFalse ? onSubmit(null) : testBird(selectedBird)
  }

  function testBird(bird) {
    if (!bird) {
      alert("no bird selected")
    } else if (bird === trueName) {
      alert("Yay that's correct!")
      handleNextBird()
    } else {
      alert("SORRY Try again!")
      setChecked([false, false, false, false, false])
      
    }
  }

  function handleNextBird() {
    onHandleNextBird()
  }

  return (
    <div>
      <h2>Whats that bird? 🤔</h2>
      <div className="bird-options-container">
        <div className="bird-option">
          <label>
            <input 
              type="checkbox"
              className="defaultCheckbox"
              checked={checked[0]}
              onChange={e => handleChecked(0, e)}
              value={shuffledNames[0]}
            
            />
            <span>
              {shuffledNames[0]}
            </span>
          </label>
        </div>
        <div className="bird-option">
        <label>
            <input 
              type="checkbox"
              className="defaultCheckbox"
              checked={checked[1]}
              onChange={e => handleChecked(1, e)}
              value={shuffledNames[1]}
            
            />
            <span>
              {shuffledNames[1]}
            </span>
          </label>
        </div>
        <div className="bird-option">
          <label>
              <input 
                type="checkbox"
                className="defaultCheckbox"
                checked={checked[2]}
                onChange={e => handleChecked(2, e)}
                value={shuffledNames[2]}
              
              />
              <span>
                {shuffledNames[2]}
              </span>
            </label>
        </div>
        <div className="bird-option">
          <label>
              <input 
                type="checkbox"
                className="defaultCheckbox"
                checked={checked[3]}
                onChange={e => handleChecked(3, e)}
                value={shuffledNames[3]}
              
              />
              <span>
                {shuffledNames[3]}
              </span>
            </label>
        </div>
        <div className="bird-option">
          <label>
              <input 
                type="checkbox"
                className="defaultCheckbox"
                checked={checked[4]}
                onChange={e => handleChecked(4, e)}
                value={shuffledNames[4]}
              
              />
              <span>
                {shuffledNames[4]}
              </span>
            </label>
        </div>

      </div>
      <div className="bird-test-buttons">
      <button onClick={handleSubmit}>Submit!!</button>
      <button onClick={handleNextBird}>Next Bird</button>
      </div>
    </div>
  )
}