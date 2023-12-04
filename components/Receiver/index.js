import React from "react";
import styled from "styled-components";

const ReceiverContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-right: 10px;
  width: 200px;
  overflow: hidden;
`;

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NickName = styled.div`
  font-weight: bold;
`;

const Name = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Email = styled.div`
  color: #555;
`;

const BigContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
`;

const Receiver = ({ friend }) => {
  const { profilePicture, nickName, name, email } = friend;

  return (
    <BigContainer>
      <ReceiverContainer>
        <ProfilePicture src={profilePicture} alt="Profile" />
        <DetailsContainer>
          <NickName>{nickName}</NickName>
          <Name>{name}</Name>
          <Email>{email}</Email>
        </DetailsContainer>
      </ReceiverContainer>
    </BigContainer>
  );
};

export default Receiver;
