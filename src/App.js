// React import
import { useState } from 'react';

// css import 
import './App.css';

// steps
import Step1 from './components/original/steps/Step1';
import Step2 from './components/original/steps/Step2';

// header import
import { Header } from './components/original/Header';
import { Rules } from './components/original/Rules';

function App() {
  // show rule var
  const [isShown, setShowing] = useState(true)

  // battle vars
  // // current index of steps array
  const [pos, setPos] = useState(0)

  // // score var
  const [score, setScore] = useState(0)

  // // players [someone vs comp] 
  const [player, setPlayer] = useState("")

  // steps array
  const steps = [
    <Step1 battle={battle} showRules={showRules} />,
    <Step2
      player={player}
      setters={[setScore]}
      playAgain={playAgain}
      showRules={showRules}
    />
  ]

  // start battle function
  function battle(p) {
    // choose player
    setPlayer(p)

    // step up
    setPos(prev => prev + 1)
  }

  // play again
  function playAgain() {
    setPos(prev => prev-1)
  }

  // show rules
  function showRules() {
    setShowing(prev => !prev)
  }

  return (
    <div className="App">
      {/* Rules box */}
      <Rules isHidden={isShown} showRules={showRules} />

      {/* Header component */}
      <Header score={score} />

      {/* Current step */}
      {steps[pos]}

    </div>
  );
}

export default App;
