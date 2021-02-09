import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from "./RestaurantCard.module.scss";

const RestaurantCard = ({ restaurant }) => (
  <div className={styles.Card}>
    <Link className={styles.CardLink} to={`/restaurant/${restaurant.id}`}>
      <div className={styles.CardTitleRow}>
        <h2 className={styles.CardTitle}>{restaurant.name}</h2>
        <div className={styles.PriceRange}>{restaurant.priceRange}</div>
      </div>
      <img className={styles.CardImage} src={restaurant.imageSrc} alt={restaurant.imageDescription} />
      <div className={styles.Description}>{restaurant.description}</div>
    </Link>
  </div>
);

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priceRange: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageDescription: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RestaurantCard;
