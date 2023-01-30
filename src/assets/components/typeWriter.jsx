import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import '../css/header.css';

const MyComponent = () => {

  const handleDone = () => {
    console.log(`Done after 2 loops!`)
  }

  return (
    <div id='header'>
      <h1 className='main-title'>
        Maikon Natã {' '}
        <span style={{ color: 'aqua', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['eu sou', 'Front-End Developer', 'Entusiasta de tecnologia', 'Gamer']}
            loop={2}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
          />
        </span>
      </h1>
    </div>
  )
}

export default MyComponent;