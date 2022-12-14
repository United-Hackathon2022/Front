import * as S from './User.style';
import Users from '../../api/users';
import { useEffect, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const User = () => {
  const [userData, setUserData] = useState();

  const getUserData = async () => {
    const { data } = await Users.getUser();
    setUserData(data);
    console.log(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {userData && (
        <S.UserContainer>
          <S.Title></S.Title>
          <S.UserInfoContainer>
            <S.ProfileImg />
            <div>
              <S.UserInfo>
                <S.UserName>
                  {/* {userData && userData} */}
                  {userData.name}
                  <S.FollowBtn>
                    <AiOutlineCheck />
                    팔로잉
                  </S.FollowBtn>
                </S.UserName>
                {/* <div>{userData && userData}</div> */}
                <div>{userData.auth_code}</div>
              </S.UserInfo>
              {/* <S.FollowNumber>팔로잉 6 | 팔로워 7</S.FollowNumber> */}
            </div>
          </S.UserInfoContainer>
        </S.UserContainer>
      )}
    </>
  );
};

export default User;
