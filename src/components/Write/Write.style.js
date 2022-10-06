import styled from '@emotion/styled';
import { palette } from '../../shared/styles/palette';

export const Body = styled.div`
  width: 578px;
  height: calc(100vh - 60px);
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
`;

export const WriteSection = styled.form`
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
    background-color: ${palette.main};
    border: none;
  }
  img {
    width: 18px;
  }
`;

export const TypeSection = styled.div`
  display: flex;
  width: 154px;
  justify-content: space-between;
  font-size: 14px;
  line-height: 22px;
  color: #515151;
  input {
    display: none;
  }

  label > div {
    cursor: pointer;
    color: #cfcfcf;
  }

  label > input:checked + div {
    color: ${palette.main};
  }
`;

export const ContentInput = styled.textarea`
  margin-top: 15px;
  font-size: 14px;
  color: #8e8e8e;
  resize: none;
  flex: 1;
`;

export const Button = styled.button`
  width: 478px;
  height: 48px;
  background-color: ${palette.main};
  border-radius: 6px;
  border: none;
  font-size: 21px;
  line-height: 27px;
  color: #ffffff;
  text-align: center;

  cursor: pointer;
`;
