import css from './FriendList.module.css';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.statusOn : css.statusOff}>
        {isOnline}
      </span>

      <img className={css.avatar} src={avatar} alt={name} width="48" />

      <p className="name">{name}</p>
    </li>
  );
};
