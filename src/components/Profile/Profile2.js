import Stats from './Stats';

import PropTypes from 'prop-types';
import styles from './profile.module.css';

function Profile2({ avatar, name, tag, location, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <Stats {...stats} />
    </div>
  );
}

Profile2.propTypes = {
  name: PropTypes.string,
};

export default Profile2;
