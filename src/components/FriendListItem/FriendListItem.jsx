import clsx from 'clsx';
import css from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.card}>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.isOnline, isOnline ? css.green : css.red)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};
export default FriendListItem;
