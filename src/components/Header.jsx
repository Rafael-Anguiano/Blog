const Header = () => {
    return (
        <header className="flex items-center w-full bg-linear-to-r from-red-600 to-orange-500 h-13">
            <div className="flex-1 pl-7">
                <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-[50%] bg-black justify-center flex" />
            </div>
            <div className="flex flex-1 justify-end pr-7">
                <img src="/logo.png" alt="Profile" className="w-10 h-10 rounded-[50%] bg-black" />
            </div>

        </header>
    )
}

export default Header
