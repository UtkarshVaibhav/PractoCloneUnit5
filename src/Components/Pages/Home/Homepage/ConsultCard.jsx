import React from 'react';
import styles from './ConsultCard.module.css'

const ConsultCard = ({ image, title }) => {
  return (
    <div className={styles.consultCard}>
        <div className={styles.consultCardImgContainer}>
            <img src={image} alt={title} />
        </div>
        <div className={styles.consultCardTitle}>{title}</div>
        <div className={styles.consultCardConsultnow}>CONSULT NOW</div>
    </div>
  )
}

export { ConsultCard }