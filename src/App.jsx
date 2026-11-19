import { useState } from 'react'
import { languages } from './languages'
import './App.css'

function App() {

  let [word, setWord] = useState("react")

  const letterElements = word.split("").map((letter, index) => (
    <span key={index} className="letter">
      {letter.toUpperCase()}
    </span>
  ))

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
        </main>
  )
}

export default App
