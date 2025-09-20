import styles from './Navbar.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../Store/ThemeContext'

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const linkStyle = {
  color: darkMode ? "#fff" : "#000"
};


  const navbarStyle = {
    backgroundColor: darkMode ? "#000" : "#fff",
    color: darkMode ? "#fff" : "#000",
  };

  const btnStyle = {
    backgroundColor: darkMode ? "#fff" : "#000",
    color: darkMode ? "#000" : "#fff",
    borderColor: darkMode ? "#fff" : "#000"
  };

  return (
    <>
      <nav className={`${styles.navbar} navbar navbar-expand-lg `} style={navbarStyle}>

        <div className="container-fluid">

          <a className={`${styles['navbar-brand']} navbar-brand`} href="#" style={linkStyle}>Navbar</a>

          

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">

            <li className="nav-item" >

                <a className={`${styles.navLink} nav-link`} href="#" style={linkStyle}>Home</a>

            </li>

            <li className="nav-item">
                <a className={`${styles.navLink} nav-link`} href="#" style={linkStyle}>Features</a>
            </li>

            <li className="nav-item" >
                <a className={`${styles.navLink} nav-link`} href="#" style={linkStyle}>Pricing</a>
            </li>

            <li className="nav-item" >
                <a className={`${styles.navLink} nav-link disabled`} aria-disabled="true" style={linkStyle}>Disabled</a>
            </li>

          </ul>
        </div>
        <button className={styles.toggleBtn} style={btnStyle} onClick={toggleTheme}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
       </div>
      </nav>
    </>
  )
}

export default Navbar