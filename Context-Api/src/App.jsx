import Navbar from './Components/Navbar'
import Card from './Components/Body'
import styles from './App.module.css'
import { useContext } from 'react'
import { ThemeContext } from './Store/ThemeContext'

function App() {
  const { darkMode } = useContext(ThemeContext);

  const themeClass = darkMode ? styles.dark : styles.light;
  return (
      <div className={`${styles.App} ${themeClass}`}>
        <Navbar />
        <Card />
      </div>
  )
}

export default App
