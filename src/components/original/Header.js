export function Header(props) {
    return (
        <header className='game-header'>
            <div className='flex-col gap-0'>
                <h1 className='head'>Rock</h1>
                <h1 className='head'>paper</h1>
                <h1 className='head'>Scissors</h1>
            </div>

            <div className='w-[100px] h-full bg-white rounded flex justify-center items-center flex-col '>
                <p className='tracking-widest text-[#2a46c0]'>Score</p>
                <h1 className='text-5xl text-[#3b4363]'>{props.score}</h1>
            </div>
        </header>
    )
}