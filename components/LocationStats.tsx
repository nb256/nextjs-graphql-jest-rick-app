import React from 'react'
import countResidentStats from '../functions/countResidentStats'
import styles from '../styles/LocationStats.module.css'
import { Location } from '../types'


export default function LocationStats({ location }: { location: Location }) {
    const stats = countResidentStats({ location })
    return (
        <>
            <div className={styles.container}>
                <div className={styles.stat}>
                    <div className={styles.statNumber}>{stats.deadCount}</div>
                    <div className={styles.statDescription}>Dead</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.statNumber}>{stats.aliveCount}</div>
                    <div className={styles.statDescription}>Alive</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.statNumber}>{stats.guestCount}</div>
                    <div className={styles.statDescription}>Guest</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.statNumber}>{stats.humanCount}</div>
                    <div className={styles.statDescription}>Human</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.statNumber}>{stats.robotCount}</div>
                    <div className={styles.statDescription}>Robot</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.statNumber}>{stats.alienCount}</div>
                    <div className={styles.statDescription}>Alien</div>
                </div>
            </div>
        </>
    )
}
