import styled from '@emotion/styled';
import { palette } from '../../shared/styles/palette';

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 60px;
  box-shadow: 0 0 10px 2px ${palette.gray[200]};
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 15px;
`;

export const ChatHeader = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 4px 0 10px 2px ${palette.gray[200]};
`;

export const HeaderName = styled.div`
  font-size: 1rem;
  margin-right: 176px;
`;

export const HeaderProfile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${palette.main};
`;

export const ContentsBox = styled.div`
  width: 160px;
  height: 250px;
  flex-wrap: wrap;
  border-radius: 5px;
  background-color: ${palette.gray[200]};
`;

export const ContentsWrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  margin: 40px 0 0 17px;
`;

export const ContentProfile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${palette.main};
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Contents = styled.div`
  font-size: 0.8rem;
  padding: 12px;
  line-height: 20px;
`;

export const Comments = styled.input`
  width: 75%;
  padding: 3px;
  background-color: ${palette.gray[200]};
  border: 1px solid ${palette.gray[300]};
  border-radius: 7px;
  padding-left: 10px;
  margin: 20px 6px 0 15px;
  outline: none;
`;

export const MessageCircleWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  bottom: 50px;
  right: 60px;
  font-size: 2rem;
  transform: rotate(-90deg);
  background-color: #fff;
  padding: 20px;
  border-radius: 50px;
  box-shadow: 0 0 10px 2px ${palette.gray[300]};
`;

export const Number = styled.div`
  position: fixed;
  right: 55px;
  bottom: 47px;
  padding: 5px 8px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f96666;
  font-size: 1rem;
  color: #fff;
`;
