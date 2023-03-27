import rules from '../../images/image-rules.svg'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function Rules(props) {
    console.log(props.isHidden ? "no":"yes");
    return <div className="absolute w-full h-screen z-[500] my-layout" id={props.isHidden && "no-display"}>
        <div className="absolute bg-white w-[300px] h-[350px] p-4 rounded">
            <div className="rules-header flex justify-between">
                <h1 className="uppercase text-3xl font-bold text-[#3b4363]">Rules</h1>
                {/* <p className="text-3xl text-gray-300" onClick={props.showRules}>x</p> */}
                <FontAwesomeIcon className='text-gray-300 py-2 text-md hover:text-red-300' icon={faXmark} onClick={props.showRules} />
            </div>

            <img src={rules} className="my-6" />
        </div>
    </div> 
}
