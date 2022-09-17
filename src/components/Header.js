import { useContext  } from "react"
import ThemeSwitcher from "./ThemeSwitcher"
import { Icon } from "../Icon/Icon"
import { ThemeContext } from "../context/ThemeContext"
import { useAuth } from "../context/AuthContext"

function Header() {

  const { theme } = useContext(ThemeContext)
  const { user, setUser } = useAuth()

  
  return (
    <header className={`${theme ? 'bg-neutral-800' : 'bg-[#365647]' } ${!user ? 'justify-center gap-x-10' : 'justify-between'} h-32 flex  px-5 items-center md:px-0 md:justify-evenly md:flex-wrap `}>
      <h1 className='text-white text-5xl md:text-3xl'>TODO <small className="text-2xl text-[#7fc4a4] md:order-1">LIST  ✓</small></h1>      

      <ThemeSwitcher />

    {
      user && 
      <div className="w-auto p-2 px-5 rounded-sm flex items-center relative md:order-2">
        <div className="absolute left-6 top-3 pr-3"><Icon name='user' size={80} /></div>
        <h3 className="mr-2 font-semibold bg-zinc-200 hover:bg-zinc-300 py-2 pl-9 pr-4 rounded-md">{user.toUpperCase()}</h3>
        <button className="hover:scale-90 transition-all bg-zinc-200 hover:bg-zinc-300 p-2 rounded-md" onClick={() => setUser(false)} ><Icon name='logout' size={25} /></button>
      </div>
    }
                    
    </header>
  )
}

export default Header