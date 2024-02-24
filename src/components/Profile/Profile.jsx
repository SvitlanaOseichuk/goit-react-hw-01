import React from "react";
import css from "./Profile.module.css"

const Profile = ({name, tag, location, image, stats:{followers, views, likes}}) => {
  return (
    <div className={css.ProfileBox}>
        <img
          className={css.imgCard}
          src={image}
          alt="User avatar"
        />
        <p className={css.nameCard}>{name}</p>
        <p className={css.tagCard}>@{tag}</p>
        <p className={css.locationCard}>{location}</p>
    

    <ul className={css.statisticCard}>
      <li className={css.statData}>
        <span>Followers</span>
        <span className={css.dataNum} >{followers}</span>
     </li>
     <li className={css.statData}>
        <span>Views</span>
        <span className={css.dataNum} >{views}</span>
     </li>
     <li className={css.statData}>
        <span>Likes</span>
        <span className={css.dataNum} >{likes}</span>
     </li>
   </ul>
   </div>

  )
}

export default Profile

