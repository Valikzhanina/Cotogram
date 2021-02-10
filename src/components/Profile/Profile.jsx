import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          alt="bg-img"
          className={s.contentimg}
          src="https://img3.goodfon.ru/wallpaper/nbig/2/e5/fon-tekstura-art-detskaya-7110.jpg"
        />
        <div className={s.contentinfo}>
          <div>
            <img
              alt="avatar"
              className={s.contentinfoimg}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrB6tQbsaQMYKnxuajH2q94ZS-zDjccP_Lkw&usqp=CAU"
            />
            ava+description
          </div>
        </div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
