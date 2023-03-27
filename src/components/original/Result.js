export function Result({result, playAgain}) {
    
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-white uppercase text-5xl text-center" >YOU {result !== '...' ? result:"Faild" }</h1>
            <button 
                className="w-full h-9 py-1 bg-white text-[#3b4363] rounded tracking-[3px] uppercase px-4"
                onClick={playAgain}
            >Play again</button>
        </div>
    )
}