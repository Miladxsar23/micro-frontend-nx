import styles from './main.module.css';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Main!</h1>
    </div>
  );
}

export default Main;
