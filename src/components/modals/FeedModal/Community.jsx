import { useEffect } from 'react';
import * as S from './Community.style';
import feed from '../../../api/feed';
import { feedList } from '../../Community/Community';
import { useParams } from 'react-router-dom';

const FeedModal = () => {
  const { id } = useParams();
  const getFeed = async () => {
    const res = await feed.getFeed(id);
    console.log(res);
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <>
      <S.Feed>
        <S.ProfileSection>
          <S.Profile src={feedList[id].user.profileImage} />
          <p>{feedList[id].user.name}</p>
        </S.ProfileSection>
        <S.ContentSection>
          <S.Title>{feedList[id].title}</S.Title>
          <S.Desc>{feedList[id].content}</S.Desc>
        </S.ContentSection>
      </S.Feed>
      <S.Comment>
        <p>{feedList[id].other?.name}</p>
        {feedList[id].other?.comment}
        <p>{feedList[id].other?.answe && feedList[id].user.name}</p>
        {feedList[id].other?.answer}
      </S.Comment>
    </>
  );
};

export default FeedModal;
