import css from './Stats.module.css'

const Stats = ({ followers, views, likes }) => 
  (
    <ul className={css.statsList}>
      <li>
        <span>Followers</span>
        <b>{followers}</b>
      </li>
      <li>
        <span>Views</span>
        <b>{views}</b>
      </li>
      <li>
        <span>Likes</span>
        <b>{likes}</b>
      </li>
    </ul>
  );

export default Stats;