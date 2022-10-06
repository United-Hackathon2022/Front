import { Link } from 'react-router-dom';
import * as S from './Feed.style';
import PROFILE from '../../assets/icon/profile.svg';

const Feed = ({ feed, id }) => {
  console.log(feed);
  return (
    <Link to={`/community/${id + 1}`}>
      <S.Feed>
        <S.ProfileSection>
          <S.Profile src={PROFILE} />
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
