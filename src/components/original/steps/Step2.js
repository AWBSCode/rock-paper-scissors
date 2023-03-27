// import React tools
import React, { useState, useEffect } from "react"

// import component
import { Gun } from "../Gun";
import { EmptyComp } from "../../EmptyComp";
import { Result } from "../Result";
import { RulesBtn } from '../../Rules'

// import icons
import rockIcon from '../../../images/icon-rock.svg'
import scissorsIcon from '../../../images/icon-scissors.svg'
import paperIcon from '../../../images/icon-paper.svg'

export default function Step2(props) {
    // player vars
    const [icon, setIcon] = useState(null) // player's icon
    const [color, setColor] = useState(null) // player's border color

    // comp vars
    const guns = ["paper", "rock", "scissors"]
    const [comp] = useState(guns[Math.floor(Math.random() * guns.length)])
    const [ico, setIco] = useState(null) // computer's icon
    const [clr, setClr] = useState(null) // computer's border color
    const [cur, setCur] = useState(<EmptyComp />) // current compitator

    // result vars
    const [result, setResult] = useState("...")
    const [resultEl, setResultEl] = useState(null)

    // destructuring setters props
    let [setScore] = props.setters
    const [winner, setWinner] = useState("")

    // player arbitration
    useEffect(() => {
        if (props.player === "rock") {
            setIcon(rockIcon)
            setColor("g3")
        } else if (props.player === "scissors") {
            setIcon(scissorsIcon)
            setColor("g1")
        } else {
            setIcon(paperIcon)
            setColor("g2")
        }
    }, [])

    // comp arbitration
    useEffect(() => {
        if (comp === "rock") {
            setIco(rockIcon)
            setClr("g3")
        } else if (comp === "scissors") {
            setIco(scissorsIcon)
            setClr("g1")
        } else {
            setIco(paperIcon)
            setClr("g2")
        }
    }, [])

    // game arbitration
    useEffect(() => {
        // when draw
        if (props.player === comp) {
            setWinner("nobody")
            setResult("Draw")
            return;
        }
        // when player is rock
        else if (props.player === "rock") {
            switch (comp) {
                case "scissors":
                    setWinner("player")
                    setResult("Win")
                    // setScore(prev => prev + 0.5);
                    break;
                default:
                    setWinner("comp")
                    setResult("lose")
            }
            return;
        }
        // player is scissors
        else if (props.player === "scissors") {
            switch (comp) {
                case "paper":
                    setWinner("player")
                    setResult("Win")
                    // setScore(prev => prev + 0.5);
                    break;
                default:
                    setWinner("comp");
                    setResult("lose")
            }
            return;
        }
        // when player is paper
        else {
            switch (comp) {
                case "rock":
                    setWinner("player")
                    setResult("Win")
                    break;
                default:
                    setWinner("comp")
                    setResult("lose")
            }
            return;
        }
    }, [])

    // render comp after 3 seconds [3000ms]
    // // setting current gun after 3 seconds => [ clr -> color of comp ] 
    useEffect(() => {
        setTimeout(() => {
            setCur(<Gun img={ico} gnum={clr} />)
            setResultEl(<Result result={result} playAgain={props.playAgain} />)
        }, 2000)
    }, [clr]);
    // // setting the score after 3 seconds => [ winner ]
    useEffect(() => {
        setTimeout(() => {
            if (winner === "player") {
                setScore(prev => prev + 1)
            }
        }, 2000)
    }, [winner]);

    return (
        <div className="step2">
            <div className="desktop">
                <div className="flex items-center result-container">
                    {/* player */}
                    <div>
                        <p className="text-center text-white uppercase mb-12 text-md">You Picked</p>
                        <Gun img={icon} gnum={color} />
                    </div>
                    {/* Here Result text */}
                    {resultEl}
                    {/* comp */}
                    <div>
                        <p className="text-center text-white uppercase mb-12 text-md">The house Picked </p>
                        {cur}
                    </div>
                </div>
            </div>

            <div className="mobile">
                <div className="flex gap-[60px] mb-8">
                    {/* player */}
                    <div>
                        <Gun img={icon} gnum={color} />
                        <br />
                        <p className="text-center text-white uppercase mt-8 text-md">You Picked</p>
                    </div>
                    {/* comp */}
                    <div>
                        {cur}
                        <br />
                        <p className="text-center text-white uppercase mt-7 text-md">You Picked</p>
                    </div>
                </div>

                {resultEl}

                <RulesBtn handleClick={props.showRules} />
            </div>

        </div>
    )
}