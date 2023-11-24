import Lapbook from './lapbook'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}><h1>Lap Book - Kinematograf</h1></header>
      <div className={styles.center}><div className={styles.lapBookContainer}>
        <Lapbook/>
      </div></div>
    </main>
  )
}
