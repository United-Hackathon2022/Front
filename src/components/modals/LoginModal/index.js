import ModalContainer from '../../ModalContainer/Modals';
import LoginImg from '../../../assets/modal_img/login.svg';
import GoogleIcon from '../../../assets/icon/naver.svg';
import * as S from './style';

const LoginModal = () => {
  return (
    <ModalContainer
      svg={LoginImg}
      title="로그인"
      desc="네이버 계정으로 간편하게 로그인하세요."
    >
      <S.Button>
        <img src={GoogleIcon} alt="" />
        네이버 계정으로 로그인
      </S.Button>
    </ModalContainer>
  );
};

export default LoginModal;
