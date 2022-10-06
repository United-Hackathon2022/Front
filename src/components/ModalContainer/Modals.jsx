import * as S from './Modals.style';

const ModalContainer = ({ svg, title, desc, children }) => {
  return (
    <S.Background>
      <S.Modal>
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
