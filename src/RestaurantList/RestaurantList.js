import React from 'react';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import styles from './RestaurantList.module.scss';

const RestaurantList = ({ restaurants, priceRangeFilter, nameFilter }) => {
  const anyPriceSelected = Object.values(priceRangeFilter).some(f => f);

  const restaurantsInPriceRange = anyPriceSelected
    ? restaurants.filter(restaurant => priceRangeFilter[restaurant.priceRange])
    : restaurants;

  const filteredRestaurants = restaurantsInPriceRange.filter(
    restaurant =>
      restaurant.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(nameFilter.toLowerCase()),
  );

  return (
    <div className={styles.CardContainer}>
      {filteredRestaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
