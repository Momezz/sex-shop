import './styles.css';
import dil from '../../assets/img/dildo-sin-fondo.png';

const Card = () => {
  return (
    <div className="card__container">
      <div className="card__price-container">
        <span className="card__price">$ 30.000</span>
      </div>
      <img className="card__image" src={dil} alt="Foto juguete sexual" />
      <div className="card__text-on-image">
        <p className="card__text-ofert">EN OFERTA</p>
        <h2 className="card__name-product">Nombre Producto</h2>
      </div>
    </div>
  )
}

export default Card;
