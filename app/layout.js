import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promptopia',
  description: 'Discover and share AI prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'>
          </div>
          <main className='app'>
            {children}

          </main>
        </div>
      </body>

    </html>
  )
}
