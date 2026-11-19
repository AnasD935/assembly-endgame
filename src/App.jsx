import { useState } from 'react'
import { languages } from './languages'
import './App.css'

function App() {

  let [word, setWord] = useState("react")
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const languageElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
            <span 
                className="chip" 
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
  })

  const letterElements = word.split("").map((letter, index) => (
    <span key={index} className="letter">
      {letter.toUpperCase()}
    </span>
  ))

  const keyboard = alphabet.split("").map((letter, index) => (
    <button key={index} className='keyboard-btn' >
      {letter.toUpperCase()}
    </button>
  ))

  return (
      <main>
          <header>
              <h1>Assembly: Endgame</h1>
              <p>
                Guess the word within 8 attempts to keep the programming world safe from Assembly!
              </p>
          </header>
          <section className='msg'>
            <h1>You win!!</h1>
            <p>well done 😎</p>            
          </section>
          <section className='language-chips'>
            {languageElements}
          </section>
          <section className='letter-section'>
            {letterElements}
          </section>
          <section className='keyboard-section'>
            {keyboard}
          </section>
          <button className="new-game">New Game</button>
      </main>
  )
}

export default App
