import { useState } from 'react';
import * as S from './Chat.style';
import { FiMessageCircle, FiX } from 'react-icons/fi';

const Chat = () => {
  const [isChatting, setIsChatting] = useState(false);

  return (
    <>
      {isChatting ? (
        <S.ChatContainer>
          <S.ChatHeader>
            <S.HeaderProfile />
            <S.HeaderName>찰리</S.HeaderName>
            <FiX
              style={{ cursor: 'pointer' }}
              onClick={() => setIsChatting(prev => !prev)}
            />
          </S.ChatHeader>
          <S.ContentsWrap>
            <S.ContentProfile>찰리</S.ContentProfile>
            <S.ContentsBox>
              <S.Contents>
                안녕하세요! 이번에 제가 처음 생리를 했는데 이걸 어떻게
                해야해요..? 부모님한테는 뭐라고 그러죠..? 안녕하세요! 이번에
                제가 처음 생리를 했는데 이걸 어떻게 해야해요..? 부모님한테는
                뭐라고 그러죠..?
              </S.Contents>
            </S.ContentsBox>
          </S.ContentsWrap>
          <S.Comments type="text" placeholder="댓글 입력..." />
          보내기
        </S.ChatContainer>
      ) : (
        <S.MessageCircleWrap onClick={() => setIsChatting(prev => !prev)}>
          <FiMessageCircle />
        </S.MessageCircleWrap>
      )}
    </>
  );
};

export default Chat;
