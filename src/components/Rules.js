/*
    Please, convert this tailwind code to css code with out shallel 
*/

export function RulesBtn(props) {
    return (
        <button
            className="rules-btn w-[150px] h-[40px] text-white border-2 rounded-lg tracking-widest hover:bg-white hover:text-[#141539] transition "
            onClick={props.handleClick}
        >
            RULES
        </button>
    )
}