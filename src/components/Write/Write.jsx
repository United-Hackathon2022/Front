import * as S from './Write.style';
import MOON_LOGO from '../../assets/logo_img/moon.svg';
import { useForm } from 'react-hook-form';
import Feed from '../../api/feed';
const Write = () => {
  const { register, handleSubmit } = useForm();
  const onValid = async data => {
    console.log(data);
    await Feed.postFeed({ data });
  };

  const inValid = errors => {
    console.log(errors);
  };

  return (
    <S.Body>
      <S.WriteSection onSubmit={handleSubmit(onValid, inValid)}>
        <S.TitleInput
          placeholder="제목을 입력하세요."
          {...register('title', { required: true })}
        />
        <S.ImgSection>
          <hr />
          <img src={MOON_LOGO} alt="" />
        </S.ImgSection>
        <S.TypeSection>
          <p>종류</p>
          <label>
            <input
              id="type"
              value="QUESTION"
              type="radio"
              {...register('type', { required: true })}
            />
            <div>질문</div>
          </label>

          <label>
            <input
              value="JOB_OFFER"
              id="type"
              type="radio"
              {...register('type', { required: true })}
            />
            <div>멘토 구하기</div>
          </label>
        </S.TypeSection>
        <S.ContentInput
          placeholder="당신의 이야기를 적어보세요..."
          {...register('content', { required: true })}
        />
        <S.Button>등록하기</S.Button>
      </S.WriteSection>
    </S.Body>
  );
};

export default Write;
