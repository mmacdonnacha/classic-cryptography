import { useState } from "react"

export default function Atbash() {
  
  const [plaintext, setPlaintext] = useState("")
  const [encryptedText, setEncryptedText] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if(plaintext === "") return

    const encryptedWord = encrypt(plaintext)

    setEncryptedText(encryptedWord)
  }
  return(
    <>
    <h1>Atbash Cipher</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="plaintext">Text to encrypt</label>
          <input type="text" id="plaintext" value={plaintext} onChange={(e) => setPlaintext(e.target.value)}/>
        </div>
        <button>Encrypt Atbash</button>
      </form>

      <div>
        <h1>{encryptedText.length !== 0 && encryptedText}</h1>
      </div>
    </>
  )
}


function encrypt(plaintext) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  let encryptedWord = ""
  for (let i = 0; i < plaintext.length; i++) {
    const letter = plaintext[i]
    const newIndex = alphabet.length - alphabet.indexOf(letter) -1 //+ 1
    const newLetter = alphabet.charAt(newIndex % alphabet.length )
    encryptedWord = encryptedWord + newLetter
  };

  return encryptedWord
}