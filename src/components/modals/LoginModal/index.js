import ModalContainer from '../../ModalContainer/Modals';
import LoginImg from '../../../assets/modal_img/login.svg';
import GoogleIcon from '../../../assets/icon/naver.svg';
import * as S from './style';
import auth from '../../../api/auth';

const LoginModal = () => {
  const TryLogin = async () => {
    window.location.href =
      'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=uZW5eGAiHkbEdvpSzfxn&redirect_uri=https://hackathon.dsm-pick.com/&state=hackathon';
  };
  return (
    <ModalContainer
      svg={LoginImg}
      title="로그인"
      desc="네이버 계정으로 간편하게 로그인하세요."
    >
      <S.Button onClick={TryLogin}>
        <img src={GoogleIcon} alt="" />
        네이버 계정으로 로그인
      </S.Button>
    </ModalContainer>
  );
};

export default LoginModal;
