import css from "./Profile.module.css";
import Stats from '../ProfileStats/Stats';

const Profile = ({ name, tag, location, image, stats }) =>
  (
    <section>
      <div className={css.card}>
        <div className={css.cardInfo}>
          <img
            src={image}
            alt="User avatar"
          />
          <p className={css.username}>{name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
        <Stats
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      </div>
    </section>
  );


export default Profile;