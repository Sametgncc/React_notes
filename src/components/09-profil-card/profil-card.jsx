import React from 'react'
import "./profile-card.scss"

const FormatStat = (num) => {
    if (num > 1000000) {
        return (num / 1000000).toFixed(1) + "M"
    } else if (num > 1000) {
        return (num / 1000).toFixed(1) + "K"
    }
    else {
        return num
    }
}

const ProfileCard = (props) => {
    const {avatar,name , location, followers, following, shots} = props
    const imgURL = `/images/profile/${avatar}`

  return (
    <div className='profile-card'>
        <div className='header'>
            <img src={imgURL} alt="" />
        </div>
        <div className='content'>
            <img src={imgURL} alt="" className='avatar' />

            <h2>{name}</h2>
            <h4>{location}</h4>

            <ul className='stats'>
                <li>
                    <h3>{FormatStat(shots)}</h3>
                    <p>Shot{shots > 1 && "s"} </p>
                </li>
                <li>
                    <h3>{FormatStat(followers)}</h3>
                    <p>Followers</p>
                </li>
                <li>
                    <h3>{FormatStat(following)}</h3>
                    <p>Following</p>
                </li>

            </ul>


        </div>
      
    </div>
  )
}

export default ProfileCard
