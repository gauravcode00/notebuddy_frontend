import React from 'react'
import Footer from './Footer'
import Notes from './Notes'
import Header from './Header'

const Home2 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50">
        <Header />
      </header>
      <main className="flex-1 mt-[64px] mb-[56px] overflow-y-auto">
        <Notes />
      </main>
      <footer className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </footer>
    </div>
  )
}

export default Home2
