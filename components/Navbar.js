import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
export default function Navbar() {
  return (
    <div className={styles['navbar']}>
        <Link href="/apod" className={styles['link']} >NASA&#039;s Astronomy Picture of the Day</Link>
        <Link href="/image" className={styles['link']} >Search space related images</Link>
        <Link href="/epic" className={styles['link']} >Earth Polychromatic Imaging Camera</Link>
    </div>
  )
}
