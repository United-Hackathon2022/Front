import { Link } from 'react-router-dom';
import * as S from './Feed.style';

const Feed = ({ feed, id }) => {
  return (
    <Link to={`/community/${id}`}>
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
    </Link>
  );
};

export default Feed;
