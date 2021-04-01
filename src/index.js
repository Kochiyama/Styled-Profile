import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './pages/Profile';
import './index.css';

const userData = {
  avatar: 'https://avatars.githubusercontent.com/u/26096036?v=4',
  backgroundImg:
    'https://images.unsplash.com/photo-1514205447349-072b4f7d7cb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80',
  fullname: 'Marcelo Haruo Kochiyama',
  username: 'kochiyama',
  email: 'marcelokochiyama@email.com',
  bio:
    'Undergraduate in Software Engineering at UNIGRAN. Lover of programming, music and games. Trying to build a solid learning path.',
  instagramLink: 'https://www.instagram.com/mhkochiyama/',
  linkedinLink: 'https://www.linkedin.com/in/marcelo-kochiyama/',
  techs: ['React', 'NodeJS', 'Rust'],
};

ReactDOM.render(
  <React.StrictMode>
    <Profile userData={userData} />
  </React.StrictMode>,
  document.getElementById('root')
);
