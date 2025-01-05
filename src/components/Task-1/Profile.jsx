import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  return (
    <div className={css.card}>
      <div className={css.cardWrapp}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.fulname}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.stats}>Followers</span>
          <span className={css.followers}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.stats}>Views</span>
          <span className={css.followers}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.stats}>Likes</span>
          <span className={css.followers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
