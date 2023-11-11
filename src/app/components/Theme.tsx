'use client'

import { useEffect, useState } from 'react'

import { Moon, Sun } from 'lucide-react'

export default function Theme() { 
  const [theme, setTheme] = useState(localStorage.theme || 'light')

  useEffect(() => { 
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')

    localStorage.theme = theme
    setTheme(theme)
  }, [theme])

  return  <div className="flex flex-row gap-4 items-center ml-auto">
    {theme === 'dark' 
      ? <button onClick={() => setTheme('light')}>
        <Sun className="text-black/60 dark:text-white/40" size={18}  /> 
      </button>
      : <button onClick={() => setTheme('dark')}>
        <Moon className="text-black/60 dark:text-white/40" size={18} />
      </button>
    }
  </div>
}
