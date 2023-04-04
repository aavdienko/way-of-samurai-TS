import styles from './Preloader.module.css'
import preloader from '../../assets/preloader.svg'

export const Preloader = () => {
  return <div><img className={styles.preloader} src={preloader}/></div>
  
}