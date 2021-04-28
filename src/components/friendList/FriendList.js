import React from 'react'
import FriendListItem from './friendListItem/FriendListItem';
import { FriendContainerStyled } from './FriendsContainerStyled';


const FriendList = ({friends}) => {
    return (
        <FriendContainerStyled>
            {friends.map(friend => (
                <FriendListItem {...friend} key={friend.id} />
            ))}
        </FriendContainerStyled>
    );
}

export default FriendList;
