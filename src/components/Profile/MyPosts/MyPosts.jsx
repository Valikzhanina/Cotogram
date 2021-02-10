import React from './node_modules/react';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div className={s.posts}>
        <div className={s.item}>Post1</div>
        <div className={s.item}>Post2</div>
      </div>
    </div>
  );
};

export default MyPosts;
