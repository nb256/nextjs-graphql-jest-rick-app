import React from 'react'
import styles from '../styles/ResidentCard.module.css'
import { Resident } from '../types'
import Image from 'next/image'

export default function ResidentCard({ name, status, species, gender, image }: Resident) {
    return (
        <>
            <a className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image src={image} alt={"Picture of " + name} layout="fill" />
                </div>
                <h2>{name}</h2>
                <p><b>Status:</b>{status}</p>
                <p><b>Species:</b>{species}</p>
                <p><b>Gender:</b>{gender}</p>
            </a>
        </>
    )
}
