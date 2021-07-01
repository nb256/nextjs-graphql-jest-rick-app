import React from 'react'
import styles from '../styles/ResidentCard.module.css'

export default function ResidentCard({ name, status, species, gender, image }: {
    name: string, status: string, species: string, gender: string, image: string
}) {
    return (
        <>
            <a className={styles.card}>
                <img className={styles.image} src={image} />
                <h2>{name}</h2>
                <p><b>Status:</b>{status}</p>
                <p><b>Species:</b>{species}</p>
                <p><b>Gender:</b>{gender}</p>
            </a>
        </>
    )
}
