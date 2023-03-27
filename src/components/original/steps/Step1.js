// guns icons
import rock from '../../../images/icon-rock.svg'
import scissors from '../../../images/icon-scissors.svg'
import paper from '../../../images/icon-paper.svg'

// line
import line from "../../../images/bg-triangle.svg"

// components
import { Gun } from '../Gun';
import { RulesBtn } from '../../Rules';

// css import
import '../../../App.css'

export default function Step1({battle, showRules}) {

    return (
        <div className="step1">
            <div className='flex flex-col justify-center items-center gap-[50px] mb-8'>
                <img src={line} className="guns-bg absolute z-[-3]" />

                <div className='flex justify-between gap-[80px]'>
                    <Gun img={paper} gnum="g2" handleClick={() => battle("paper")} />
                    <Gun img={scissors} gnum="g1" handleClick={() => battle("scissors")} />
                </div>

                <Gun img={rock} gnum="g3" handleClick={() => battle("rock")} />
            </div>

            <RulesBtn handleClick={showRules} />
        </div>
    )
}