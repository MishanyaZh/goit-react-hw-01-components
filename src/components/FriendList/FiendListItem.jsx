// import css from './FriendList.module.css';
import { Item, StatusOn, StatusOf, Avatar, Name } from './FrendListItem.styled';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    // evtType={isOnline} add props for hover
    <Item evtType={isOnline} key={id}>
      {isOnline ? (
        <StatusOn>{isOnline}</StatusOn>
      ) : (
        <StatusOf>{isOnline}</StatusOf>
      )}

      <Avatar src={avatar} alt={name} width="48" />

      <Name>{name}</Name>
    </Item>
  );
};
