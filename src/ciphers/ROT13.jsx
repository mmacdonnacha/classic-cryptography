import { useState } from "react"

function ROT13() {
  
  const [plaintext, setPlaintext] = useState("")
  const [encryptedText, setEncryptedText] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if(plaintext === "") return

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let word = ""
    for (let i = 0; i < plaintext.length; i++) {
      const letter = plaintext[i]
      const newIndex = alphabet.indexOf(letter) + 13
      const newLetter = alphabet.charAt(newIndex % alphabet.length )
      word = word + newLetter
    };

    setEncryptedText(word)
  }
  return(
    <>
    <h1>ROT13 Cipher</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="plaintext">Text to encrypt</label>
          <input type="text" id="plaintext" value={plaintext} onChange={(e) => setPlaintext(e.target.value)}/>
        </div>
        <button>Encrypt ROT13</button>
      </form>

      <div>
        <h1>{encryptedText.length !== 0 && encryptedText}</h1>
      </div>
    </>
  )
}


export default ROT13