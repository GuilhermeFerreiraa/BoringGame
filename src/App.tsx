import * as React from 'react'
import * as C from './App.style'
import Character from './Components/Character'
import useCharacter from './hooks/useCharacter'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

export default function App() {
  const char = useCharacter();
  // const char2 = useCharacter();

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();

        break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();


        break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveTop();


        break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveBottom();
        break;
    }
  }

  return (
    <C.Body>
      <C.Container>
        <C.Text>
          <AutoTyping
            active // <boolean>
            textRef='Bem Vindo ao Entediados!' // <string>
            writeSpeed={500} // <number>
            delayToWrite={1200} // <number>
          />
          <BlinkCursor
            active // <boolean>
            blinkSpeed={700} // <number>
          />
        </C.Text>
        <C.Map>
          <Character x={char.x} y={char.y} side={char.side} />
          {/* <Character x={char2.x} y={char2.y} side={char2.side} /> */}
        </C.Map>
        {/* <C.Button>
          <button onClick={() => char2.moveLeft()}></button>
          <button onClick={() => char2.moveRight()}></button>
          <button onClick={() => char2.moveTop()}></button>
          <button onClick={() => char2.moveBottom()}></button>
        </C.Button> */}
      </C.Container>
    </C.Body>
  )
}