import styles from './search-bar.module.css';

/* eslint-disable-next-line */
export interface SearchBarProps {}

export function SearchBar(props: SearchBarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SearchBar!</h1>
    </div>
  );
}

export default SearchBar;
