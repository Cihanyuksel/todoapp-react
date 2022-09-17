import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function ThemeSwitcher() {

  const { theme, setTheme } = useContext(ThemeContext)
  
  return (
    <div>
        <button className={`p-2 rounded-sm text-white font-semibold ${theme ? 'bg-neutral-100 text-black' : 'bg-neutral-900'}`} onClick={() => setTheme(state => !state)}>
          {theme === true ? '🌞  Light Mode' : '🌙  Dark Mode'}
        </button>
    </div>
  )
}

export default ThemeSwitcher;