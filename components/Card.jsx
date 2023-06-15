import PropTypes from 'prop-types';
import styles from "./Card.module.css";

const Card = ({ title, price, image }) => {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__price_container}>
        <span className={styles.card__price}>$ {price}</span>
      </div>
      <img className={styles.card__image} src={image} alt={title} />
      <div className={styles.card__text_on_image}>
        <p className={styles.card__text_ofert}>EN OFERTA</p>
        <h2 className={styles.card__name_product}>{title}</h2>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default Card;
