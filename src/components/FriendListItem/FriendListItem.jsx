import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friend }) =>
  (
    <div className={css.friendCardInfo}>
      <img src={friend.avatar} alt="Avatar" width="68" />
      <p className={css.friendName}>{friend.name}</p>
      <p className={clsx(css.friendStatus, friend.isOnline ? css.isOnline : css.isOffline)}>{friend.isOnline ? "Online" : "Offline"}</p>
    </div>
  );

export default FriendListItem;