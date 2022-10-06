import * as S from './Nav.style';
import MOON_LOGO from '../../assets/logo_img/moon.svg';
import { BsPersonCircle } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <S.NavBarContainer>
      <S.TitleLogoWrap>
        <S.TitleImg src={MOON_LOGO} alt="로고" />
        <S.Title>달거리</S.Title>
      </S.TitleLogoWrap>

      <S.NavInfoContainer>
        <S.LinkWrap linkName={'/'} pathName={pathname}>
          <Link className="link" to={'/'}>
            자주묻는 질문
          </Link>
        </S.LinkWrap>

        <S.LinkWrap linkName={'/conncet'} pathName={pathname}>
          <Link className="link" to={'conncet'}>
            멘토링
          </Link>
        </S.LinkWrap>

        <S.LinkWrap linkName={'/community'} pathName={pathname}>
          <Link className="link" to={'community'}>
            커뮤니티
          </Link>
        </S.LinkWrap>

        <div>
          <BsPersonCircle style={{ fontSize: '1.4rem' }} />
          <div></div>
        </div>
      </S.NavInfoContainer>
    </S.NavBarContainer>
  );
};

export default Nav;
