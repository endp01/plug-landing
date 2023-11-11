import Link from 'next/link'

import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-black h-screen text-black dark:text-white flex items-center justify-center">
      <div>
        <h1 className="text-5xl mb-4">PAGE NOT FOUND.</h1>
        <p className="text-xl mb-12 max-w-[420px]">Sorry, this page does not exist -- You likely got here by mistake. Let us get you back to safety.</p>

        <Link href="/" className="p-4 px-8 bg-black dark:bg-white text-white dark:text-black flex flex-row gap-4 items-center">
          <Home className="text-white/60 dark:text-black/60" size={18} />
          RETURN HOME 
        </Link>
      </div>
    </div>
  )
}
