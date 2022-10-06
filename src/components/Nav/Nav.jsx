import * as S from './Nav.style';
import MOON_LOGO from '../../assets/logo_img/moon.svg';
import { BsPersonCircle, BsBell } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoginModal from '../modals/LoginModal';
import MentoringModal from '../modals/MentoringModal';
import { useRecoilState } from 'recoil';
import { ShowLoginModal, ShowMentoringModal } from '../../Atoms';
import { toast } from 'react-toastify';

const Nav = () => {
  const { pathname } = useLocation();
  const [isAlarmModal, setIsAlarmModal] = useState(false);
  const navigate = useNavigate();

  const [dummyData, setDummyData] = useState([
    {
      mentoName: '금현호',
    },
    {
      mentoName: '유시온',
    },
  ]);

  const [token, setToken] = useState(false);
  const [showLoginModal, setShowLoginModal] = useRecoilState(ShowLoginModal);
  const [showMentoringModal, setShowMentoringModal] =
    useRecoilState(ShowMentoringModal);

  const location = useLocation();

  const code = location.search.split('=')[1];
  useEffect(() => {
    // code && setToken(true);
    if (code) {
      setToken(true);
      toast.success('로그인에 성공했습니다.');
    }
  }, []);

  return (
    <>
      <S.NavBarContainer>
        <S.TitleLogoWrap>
          <S.TitleImg src={MOON_LOGO} alt="로고" />
          <S.Title onClick={() => navigate('/')}>달거리</S.Title>
        </S.TitleLogoWrap>

        {token ? (
          <S.NavInfoContainer>
            <S.LinkWrap linkName={'/'} pathName={pathname}>
              <Link className="link" to={'/'}>
                자주묻는 질문
              </Link>
            </S.LinkWrap>

            <S.LinkWrap linkName={'/community'} pathName={pathname}>
              <Link className="link" to={'community'}>
                커뮤니티
              </Link>
            </S.LinkWrap>

            <S.LinkWrap
              linkName={'/conncet'}
              pathName={pathname}
              onClick={() => {
                setShowMentoringModal(!showMentoringModal);
              }}
            >
              <Link className="link">멘토링 하기</Link>
            </S.LinkWrap>

            <div
              style={{
                fontSize: '1.4rem',
                display: 'flex',
                gap: '15px',
                marginLeft: '20px',
              }}
            >
              <BsBell
                style={{ cursor: 'pointer' }}
                onClick={() => setIsAlarmModal(prev => !prev)}
              />
              <BsPersonCircle />
            </div>
          </S.NavInfoContainer>
        ) : (
          <S.OauthContainer>
            <S.SignUp
              onClick={() => {
                setShowLoginModal(!showLoginModal);
              }}
            >
              회원가입
            </S.SignUp>
            <S.SignIn
              onClick={() => {
                setShowLoginModal(!showLoginModal);
              }}
            >
              로그인
            </S.SignIn>
          </S.OauthContainer>
        )}
      </S.NavBarContainer>

      {showLoginModal && <LoginModal />}
      {showMentoringModal && <MentoringModal />}
      {isAlarmModal && (
        <S.Modal>
          <S.Tail />
          {dummyData ? (
            dummyData.map((item, idx) => {
              return (
                <S.AlarmContainer key={idx + 1}>
                  <S.MentoName>{item.mentoName} </S.MentoName> 님이 멘토링을
                  신청하였습니다.
                  <S.AllowBtnContainer>
                    <S.AllowBtn>승인</S.AllowBtn>
                    <S.Cancel>거절</S.Cancel>
                  </S.AllowBtnContainer>
                </S.AlarmContainer>
              );
            })
          ) : (
            <S.NullContent>알림이 없습니다.</S.NullContent>
          )}
        </S.Modal>
      )}
    </>
  );
};

export default Nav;
