import styled from '@emotion/styled';
import { palette } from '../../shared/styles/palette';

export const NavBarContainer = styled.div`
  height: 60px;
  padding: 0 200px;
  display: flex;
  justify-content: space-between;
  box-shadow: 4px 0 10px 2px ${palette.gray[300]};
  background-color: #fff;
`;

export const TitleImg = styled.img`
  font-size: 40px;
`;

export const TitleLogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
`;

export const NavInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LinkWrap = styled.div`
  display: flex;
  gap: 15px;
  .link {
    color: ${({ linkName, pathName }) =>
      linkName === pathName ? `${palette.main}` : '#333'};
  }

  .link:hover {
    color: ${palette.main};
  }
`;

export const Modal = styled.div`
  width: 400px;
  height: 500px;
  box-shadow: -5px 0 20px 2px ${palette.gray[300]};
  position: absolute;
  top: 80px;
  right: 43px;
  border-radius: 5px;
  background-color: #fff;
`;

export const Tail = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  top: -10px;
  left: 45%;
  background-color: #fff;
  transform: translateX(-50%);
  transform: rotate(45deg);
`;

export const AlarmContainer = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  border-top: 1px solid ${palette.gray[300]};
  font-size: 0.95rem;
  overflow: auto;
`;

export const MentoName = styled.div`
  font-weight: bold;
`;

export const AllowBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
`;

export const AllowBtn = styled.button`
  text-align: center;
  padding: 6px 8px;
  border-radius: 5px;
  background-color: ${palette.random[5]};
  cursor: pointer;
  border: none;
`;

export const Cancel = styled.button`
  text-align: center;
  padding: 6px 8px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${palette.gray[300]};
`;

export const NullContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OauthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SignUp = styled.div`
  padding: 12px;
  text-align: center;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  border: 1px solid ${palette.gray[300]};
`;

export const SignIn = styled.div`
  padding: 12px;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  font-size: 0.8rem;
  cursor: pointer;
  background-color: ${palette.main};
`;
