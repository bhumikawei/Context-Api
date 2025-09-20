import image from '../assets/vernon.jpg'
import styles from './Body.module.css'

const Card = () => {
  return (

    <div className={styles['card-container']}>
      <div className={styles.card}>
      <img src={image} className={styles['card-img-top']} alt="Vernon"/>
      <div className={styles['card-body']}>
        <h5 className={styles['card-title']}>Vernon</h5>
        <p className={styles['card-text']}>Vernon is Vernon . 2 - 1</p>
        <a href="#" className={styles['btn-primary']}>Songs</a>
      </div>
    </div>
    </div>
  )
}
export default Card