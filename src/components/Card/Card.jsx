import './styles.css';
import PropTypes from 'prop-types';

const Card = ({title, category, price, image}) => {
  return (
    <div className="card__container">
      <div className="card__price-container">
        <span className="card__price">$ {price}</span>
      </div>
      <img className="card__image" src={image} alt="Foto juguete sexual" />
      <div className="card__text-on-image">
        <p className="card__text-ofert">EN OFERTA</p>
        <h2 className="card__name-product">{title}</h2>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default Card;
