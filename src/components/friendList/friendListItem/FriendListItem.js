import React from 'react'
import { FriendsStyled } from './FriendsListStyled';



const FriendListItem = ({avatar, name, isOnline}) => {
    return (
      
        <FriendsStyled isOnline={isOnline}>
  <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt={name} width="48" />
  <p className="name">{name}</p>
</FriendsStyled>

    );
}
FriendListItem.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};



export default FriendListItem;