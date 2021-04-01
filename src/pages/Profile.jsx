import React from 'react';
import styled from 'styled-components';
import BasicInfo from '../components/BasicInfo';
import InfoGrid from '../components/InfoGrid';

const Page = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackgroundImg = styled.img`
  width: 100vw;
  height: 30vh;
  object-fit: cover;
  z-index: -999;
  position: absolute;
  top: 0;

  @media (max-width: 500px) {
    height: 20vh;
  }
`;

const ProfileContainer = styled.main`
  max-width: 500px;
`;

const Profile = ({ userData }) => {
  const {
    avatar,
    backgroundImg,
    fullname,
    username,
    email,
    bio,
    instagramLink,
    linkedinLink,
    techs,
  } = userData;

  return (
    <Page>
      <BackgroundImg src={backgroundImg} alt='User Background' />

      <ProfileContainer>
        <BasicInfo
          avatar={avatar}
          fullname={fullname}
          username={username}
          email={email}
        />

        <InfoGrid
          fullname={fullname}
          bio={bio}
          instagramLink={instagramLink}
          linkedinLink={linkedinLink}
          techs={techs}
        />
      </ProfileContainer>
    </Page>
  );
};

export default Profile;
