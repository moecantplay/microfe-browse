import React from 'react';
import TextInput from '../components/TextInput';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import styles from "./Filters.module.scss";

const Filters = ({
  name,
  priceRange,
  setNameFilter,
  setPriceRangeFilter,
  resetAll,
}) => (
  <div className={styles.FilterRow}>
    <TextInput label="Search:" value={name} onChange={setNameFilter} />
    <span className={styles.PriceRangeFields}>
      Price range:
      <Checkbox
        label="$"
        checked={priceRange.$}
        onChange={setPriceRangeFilter('$')}
      />
      <Checkbox
        label="$$"
        checked={priceRange.$$}
        onChange={setPriceRangeFilter('$$')}
      />
      <Checkbox
        label="$$$"
        checked={priceRange.$$$}
        onChange={setPriceRangeFilter('$$$')}
      />
      <Checkbox
        label="$$$$"
        checked={priceRange.$$$$}
        onChange={setPriceRangeFilter('$$$$')}
      />
    </span>
    <Button onClick={resetAll}>Clear</Button>
  </div>
);

export default Filters;
