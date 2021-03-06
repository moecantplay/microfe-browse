import React, { useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Loading from './components/Loading';
import Filters from './Filters/Filters';
import RestaurantList from './RestaurantList/RestaurantList';
import styles from './App.module.scss';

const defaultHistory = createBrowserHistory();

const App = ({ history }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [priceRangeFilter, setPriceRangeFilter] = useState({
    $: false,
    $$: false,
    $$$: false,
    $$$$: false,
  });
  const [nameFilter, setNameFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const changeNameFilter = value => setNameFilter(value);

  const changePriceRangeFilter = range => checked => {
    setPriceRangeFilter({
      ...priceRangeFilter,
      [range]: checked,
    });
  };

  const resetAllFilters = () => {
    setNameFilter('');
    setPriceRangeFilter({
      $: false,
      $$: false,
      $$$: false,
      $$$$: false,
    });
  };

  useEffect(() => {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`${host}/restaurants.json`)
      .then(res => res.json())
      .then(restaurants => {
        setLoading(false);
        setRestaurants(
          restaurants.map(restaurant => ({
            ...restaurant,
            imageSrc: `${host}${restaurant.imageSrc}`,
          })),
        );
      })
      .catch(err => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, []);

  const errorBlock = () => (
    <div className={styles.MainColumn}>
      Sorry, but the restaurant list is unavailable right now
    </div>
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Router history={history || defaultHistory}>
          <div className={styles.MainColumn}>
            <Filters
              name={nameFilter}
              priceRange={priceRangeFilter}
              setNameFilter={changeNameFilter}
              setPriceRangeFilter={changePriceRangeFilter}
              resetAll={resetAllFilters}
            />
            <RestaurantList
              restaurants={restaurants}
              priceRangeFilter={priceRangeFilter}
              nameFilter={nameFilter}
            />
          </div>
        </Router>
      )}
      {error && errorBlock()}
    </>
  );
};

export default App;
