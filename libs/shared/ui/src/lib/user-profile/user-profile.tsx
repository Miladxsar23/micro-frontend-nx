import styles from './user-profile.module.css';

/* eslint-disable-next-line */
export interface UserProfileProps {}

export function UserProfile(props: UserProfileProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UserProfile!</h1>
    </div>
  );
}

export default UserProfile;
