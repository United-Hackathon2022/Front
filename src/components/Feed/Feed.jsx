import * as S from './Feed.style';

const Feed = ({ feed }) => {
  return (
    <S.Feed>
      <S.ProfileSection>
        <S.Profile src={feed.user.profileImage} />
        <p>{feed.user.name}</p>
      </S.ProfileSection>
      <S.ContentSection>
        <S.Title>{feed.title}</S.Title>
        <S.Desc>{feed.content}</S.Desc>
      </S.ContentSection>
    </S.Feed>
  );
};

export default Feed;
