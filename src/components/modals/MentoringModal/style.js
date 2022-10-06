import styled from '@emotion/styled';

export const Input = styled.input`
  width: 363px;
  height: 58px;

  border: 1px solid #f0f0f0;
  border-radius: 6px;
  padding-left: 20px;
  font-size: 16px;

  &:focus {
    outline: 1px solid #ffcf4f;
  }

  &::placeholder {
    color: #bababa;
  }
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 363px;
  height: 54px;
  background: #ffcf4f;
  border: 1px solid #f0f0f0;
  border-radius: 6px;

  font-size: 20px;
  text-align: center;

  color: #ffffff;
  cursor: pointer;
`;
