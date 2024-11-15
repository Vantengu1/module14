/* eslint-disable react-refresh/only-export-components */
import About from './components/About'
import Downbaner from './components/Downbaner'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Servis from './components/Servis'
import './styles/globals.css'
import { createContext, Dispatch, useState } from 'react'


type ContextType = {
  theme : string;
  setTheme: Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<ContextType | null>(null);

function App() {

  const [theme, setTheme] = useState("dark");
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`container ${theme}`}>
        <Header />
        <main className='main'>
          <Hero />
          <About />
          <Servis />
          <Portfolio />
          <Downbaner />
        </main>
        <Footer />
      </div>
      </ThemeContext.Provider>
  )
}

export default App
