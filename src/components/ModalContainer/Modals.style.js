import styled from '@emotion/styled';

export const Background = styled.div`
  position: fixed;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.28);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 744px;
  height: 365px;
  display: flex;
`;

export const Left = styled.div`
  width: 40%;
  height: 100%;
  background: #fbfbfb;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 70px 40px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Right = styled.div`
  width: 60%;
  height: 100%;
  background: #ffffff;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 77px 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: 'TmoneyRoundWindExtraBold';
  font-size: 36px;
  line-height: 47px;
  color: #515151;
`;

export const Desc = styled.p`
  font-family: 'TmoneyRoundWindRegular';
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #999999;
`;
