import Card from '../Card/Card';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import data from '../../assets/data.json';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [width, setWidth] = useState(Math.floor(window.innerWidth / 300));
  const [category, setCategory] = useState('');
  const [start, setStart] = useState(0);

  useEffect(() => {
    setCategory(category)
  }, [category]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.floor(window.innerWidth / 300));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  const handleNext = () => {
    if (width < data.length) {
      setStart(start + 1);
      setWidth(width + 1);
    }
  }

  const handleLast = () => {
    if (start > 0) {
      setStart(start - 1);
      setWidth(width - 1);
    }
  }
  const filteredProducts = data.filter((product) => product.category === category);
  const elements = data.slice(start, width);
  return (
    <section className="carousel__content">
      <div className="carousel__btn-category">
        <button className="carousel__btn-option" type="submit" value="vibradores" onClick={handleCategoryChange}>Vibradores</button>
        <button className="carousel__btn-option" type="submit" value="consoladores" onClick={handleCategoryChange}>Consoladores</button>
        <button className="carousel__btn-option" type="submit" value="juguetesAnales" onClick={handleCategoryChange}>Juguetes Anales</button>
        <button className="carousel__btn-option" type="submit" value="LenceriaSexy" onClick={handleCategoryChange}>Lencería Sexy</button>
        <button className="carousel__btn-option" type="submit" value="cosmeticos" onClick={handleCategoryChange}>Cosméticos</button>
      </div>
      <article className="carousel__btn-position">
        <ul className="carousel__ul">
          {
            elements.map((element) => (
              <li className="carousel__li" key={element.id}>
                <Card
                  title={element.title}
                  category={element.category}
                  price={element.price}
                  image={element.image}
                />
              </li>
            ))
          }
        </ul>
        <div className="carousel__btn-cont">
          <div className="carousel__arrows">
            <button className="carousel__btn" onClick={handleLast}><i><FontAwesomeIcon icon={faCircleChevronLeft} /></i></button>
            <button className="carousel__btn" onClick={handleNext}><i><FontAwesomeIcon icon={faCircleChevronRight} /></i></button>
          </div>
          <h2 className="movies-list__category-title">{category}</h2>
        </div>
      </article>

    </section>
  )
}

export default Carousel;
