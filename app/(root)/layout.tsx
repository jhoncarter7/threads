import { ClerkProvider } from '@clerk/nextjs/app-beta'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import '../globals.css'
import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import Bottombar from '@/components/shared/Bottombar'
export const metadata = {
  title: "Threads",
  description: "A next.js 13 meta threads",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main>
          <LeftSidebar/>
          <section className='main-container'>
            <div className='w-full max-w-4xl'>
            {children}
            </div>
          </section>
          <RightSidebar/>
          </main>
          
          <Bottombar/>

          
         </body>
      </html>
    </ClerkProvider>
    )
}
