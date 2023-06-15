import Card from './Card';
import data from '../public/assets/data.json';
import { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
  const [width, setWidth] = useState(1);
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
  }, [width]);

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
    <section className={styles.carousel__content}>
      <div className={styles.carousel__btn_category}>
        <button className={styles.carousel__btn_option} type="submit" value="vibradores" onClick={handleCategoryChange}>Vibradores</button>
        <button className={styles.carousel__btn_option} type="submit" value="consoladores" onClick={handleCategoryChange}>Consoladores</button>
        <button className={styles.carousel__btn_option} type="submit" value="juguetesAnales" onClick={handleCategoryChange}>Juguetes Anales</button>
        <button className={styles.carousel__btn_option} type="submit" value="LenceriaSexy" onClick={handleCategoryChange}>Lencería Sexy</button>
        <button className={styles.carousel__btn_option} type="submit" value="cosmeticos" onClick={handleCategoryChange}>Cosméticos</button>
      </div>
      <article className={styles.carousel__btn_position}>
        <ul className={styles.carousel__ul}>
          {
            elements.map((element) => (
              <li className={styles.carousel__li} key={element.id}>
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
        <div className={styles.carousel__btn_cont}>
          <div className={styles.carousel__arrows}>
            <button className={styles.carousel__btn} onClick={handleLast}><i><FontAwesomeIcon icon={faCircleChevronLeft} /></i></button>
            <button className={styles.carousel__btn} onClick={handleNext}><i><FontAwesomeIcon icon={faCircleChevronRight} /></i></button>
          </div>
          <h2 className={styles.movies_list__category_title}>{category}</h2>
        </div>
      </article>
    </section>
  )
}

export default Carousel;
