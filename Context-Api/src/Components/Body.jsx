import image from '../assets/vernon.jpg'
import styles from './Body.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../Store/ThemeContext'

const Card = () => {
  const { darkMode } = useContext(ThemeContext);

  const cardStyle = {
    backgroundColor: darkMode ? "#000" : "#fff",
    color: darkMode ? "#fff" : "#000",
    border: darkMode ? "1px solid #fff" : "1px solid #000",
  };

  const btnStyle = {
    backgroundColor: darkMode ? "#fff" : "#000",
    color: darkMode ? "#000" : "#fff"
  };

  
  return (

    <div className={styles['card-container']}>
      <div className={styles.card} style={cardStyle
      }>
      <img src={image} className={styles['card-img-top']} alt="Vernon"/>

      <div className={styles['card-body']}>
        <h5 className={styles['card-title']}>Vernon</h5>
        <p className={styles['card-text']}>Vernon is Vernon . 2 - 1</p>
        <a href="#" className={styles['btn-primary']} style={btnStyle}>Songs</a>
      </div>
    </div>
    </div>
  )
}
export default Card