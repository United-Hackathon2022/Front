import styled from '@emotion/styled';

export const Body = styled.div`
  width: 578px;
  height: calc(100vh - 60px);
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
`;

export const WriteSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1000px;
  padding: 50px;
  background-color: #ffffff;

  textarea {
    border: none;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

export const TitleInput = styled.textarea`
  height: 40px;
  font-size: 28px;
  color: #515151;
  font-family: 'TmoneyRoundWindExtraBold';
  resize: none;
`;

export const ImgSection = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 10px;

  hr {
    margin: 0;
    display: inline-block;
    width: 70px;
    height: 5px;
    background: #ffcf4f;
    border: none;
  }
  img {
    width: 18px;
  }
`;

export const ContentInput = styled.textarea`
  font-size: 14px;
  color: #8e8e8e;
  resize: none;
  flex: 1;
`;

export const Button = styled.button`
  width: 478px;
  height: 48px;
  background: #ffcf4f;
  border-radius: 6px;
  border: none;
  font-size: 21px;
  line-height: 27px;
  color: #ffffff;
  text-align: center;

  cursor: pointer;
`;
