import clsx from "clsx";
import s from "./FriendsListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(s.isOnline, isOnline ? s.green : s.red)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
