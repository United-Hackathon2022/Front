import { useRecoilState } from 'recoil';
import { ShowLoginModal } from '../../Atoms';
import * as S from './Modals.style';

const ModalContainer = ({ svg, title, desc, children }) => {
  const [showLoginModal, setShowLoginModal] = useRecoilState(ShowLoginModal);

  return (
    <S.Background
      onClick={() => {
        setShowLoginModal(!showLoginModal);
      }}
    >
      <S.Modal
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <S.Left>
          <img src={svg} alt="이미지" />
        </S.Left>
        <S.Right>
          <div>
            <S.Title>{title}</S.Title>
            <S.Desc>{desc}</S.Desc>
          </div>
          {children}
        </S.Right>
      </S.Modal>
    </S.Background>
  );
};

export default ModalContainer;
