import styled from '@emotion/styled';
import { palette } from '../../shared/styles/palette';

export const UserContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 25px;
  margin-top: 50px;
`;

export const Title = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
`;

export const UserInfoContainer = styled.div`
  width: 1000px;
  height: 350px;
  background-color: #fff;
  padding: 50px;
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.div`
  width: 150px;
  height: 150px;
  margin-left: 50px;
  border-radius: 50%;
  background-color: ${palette.main};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 50px;
  margin-bottom: 70px;
`;

export const UserName = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

export const FollowBtn = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${palette.gray[200]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  outline: none;
  margin-left: 400px;
  background-color: ${palette.main};
  padding-right: 15px;
  color: #fff;
  cursor: pointer;
  &:focus {
    background-color: #fff;
    color: #333;
  }
`;

export const FollowNumber = styled.div`
  font-size: 1rem;
  margin-left: 50px;
`;

// export const ProfileImg = styled.div``;
// export const ProfileImg = styled.div``;
// export const ProfileImg = styled.div``;
// export const ProfileImg = styled.div``;
// export const ProfileImg = styled.div``;
// export const ProfileImg = styled.div``;
// export const ProfileImg = styled.div``;
