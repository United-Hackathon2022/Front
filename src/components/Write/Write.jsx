import * as S from './Write.style';
import MOON_LOGO from '../../assets/logo_img/moon.svg';

const Write = () => {
  return (
    <S.Body>
      <S.WriteSection>
        <S.TitleInput placeholder="제목을 입력하세요." />
        <S.ImgSection>
          <hr />
          <img src={MOON_LOGO} alt="" />
        </S.ImgSection>
        <S.ContentInput placeholder="당신의 이야기를 적어보세요..." />
        <S.Button>등록하기</S.Button>
      </S.WriteSection>
    </S.Body>
  );
};

export default Write;
