import styles from "./AppointmentCard.module.css"

const AppointmentCard = ({ image, title, sub }) => {
  return (
    <div className={styles.appoinmentCard}>
        <div className={styles.appoinmentCardImageContainer}>
            <img src={image} alt={title} />
        </div>
        <div>
            <div className={styles.appoinmentCardTitle}>{title}</div>
            <div className={styles.appoinmentCardSub}>{sub}</div>
        </div>
    </div>
  )
}

export { AppointmentCard };