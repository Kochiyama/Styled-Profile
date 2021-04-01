import React from 'react';
import styled from 'styled-components';

const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 18px;
  object-fit: contain;
  border-radius: 50%;
`;

const UserFullName = styled.h1`
  font-size: 20px;
  color: #fefefc;
`;

const UserSubtitle = styled.span`
  font-size: 12px;
  color: #828282;
  margin-bottom: 25px;
`;

const BasicInfo = ({ avatar, fullname, username, email }) => {
  return (
    <BasicInfoContainer>
      <ProfileImg src={avatar} alt={username} />

      <UserFullName>{fullname}</UserFullName>

      <UserSubtitle>
        @{username} - {email}
      </UserSubtitle>
    </BasicInfoContainer>
  );
};

export default BasicInfo;
