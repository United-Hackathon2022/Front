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
  width: 300px;
  height: 500px;
  box-shadow: -5px 0 20px 2px ${palette.gray[300]};
  position: absolute;
  top: 80px;
  right: 100px;
  border-radius: 5px;
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
