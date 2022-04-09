import styles from "./ArticleCard.module.css";



const ArticleCard = ({ title, image, sub, category }) => {
  return (
    <div className={styles.articleCard}>
        <div className={styles.articleCardImageContainer}>
            <img src={image} alt={title} />
        </div>
        <div className={styles.articleCardInfo}>
            <div className={styles.articleCardCategory}>{category}</div>
            <div className={styles.articleCardTitle}>{title}</div>
            <div className={styles.articleCardSub}>{sub}</div>
        </div>
    </div>
  )
}

export { ArticleCard };