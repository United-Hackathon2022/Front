import styled from '@emotion/styled';
import { palette } from '../../shared/styles/palette';

export const Body = styled.div`
  width: 700px;
  margin: 0 auto;
`;

export const Select = styled.div`
  display: flex;
  gap: 15px;
  label > input {
    display: none;
  }

  label > div {
    cursor: pointer;
    color: #cfcfcf;
    line-height: 30px;
  }

  label > input:checked + div {
    color: #515151;
    border-bottom: 1px solid #515151;
  }
`;

export const SelectSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
`;

export const LinkButton = styled.button`
  border: none;
  width: 178px;
  height: 48px;
  background-color: ${palette.main};
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  border-radius: 6px;
`;

export const FeedSection = styled.div``;
