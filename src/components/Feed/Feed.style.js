import styled from '@emotion/styled';

export const Feed = styled.div`
  width: 100%;

  height: 339px;
  background: #ffffff;
  margin-bottom: 25px;
  padding: 20px;
`;

export const ProfileSection = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 40px;
  p {
    line-height: 40px;
  }
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ContentSection = styled.div`
  margin-top: 20px;
`;

export const Title = styled.h1`
  line-height: 30px;
  font-family: 'TmoneyRoundWindExtraBold';
`;

export const Desc = styled.p`
  font-family: 'Tmoney RoundWind';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #676767;
`;
