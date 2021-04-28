import React from 'react'
import PropTypes from 'prop-types';
import {ProfileStyledContainerMain, ProfileStyledContainerList} from './ProfileStyled.js'

const Profile = ({user}) => {
    return (
        <ProfileStyledContainerMain>
            <div className="description">
                <img
                    src={user.avatar}
                    alt={user.name}
                    className="avatar"
                />
                <p className="name">{user.name}</p>
                <p className="tag">@{user.tag}</p>
                <p className="location">{user.location}</p>
                  <ProfileStyledContainerList>
                <li className="info">
                    <span className="label">Followers</span>
                    <span className="quantity">{user.stats.followers}</span>
                </li>
                <li className="info">
                    <span className="label">Views</span>
                    <span className="quantity">{user.stats.views}</span>
                </li>
                <li className="info">
                    <span className="label">Likes</span>
                    <span className="quantity">{user.stats.likes}</span>
                </li>
            </ProfileStyledContainerList>
            </div>

          
        </ProfileStyledContainerMain>
    );
}


Profile.propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        stats: PropTypes.shape({
            avatar: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
        })
    }).isRequired
};


export default Profile;