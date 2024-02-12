import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) =>
  (
    <section>
      <ul className={css.friendList}>
        {friends.map(friend =>
          (<li key={friend.id}><FriendListItem friend={friend} /></li>)
        )}
      </ul>
    </section>
  );

export default FriendList;