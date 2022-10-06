import { useEffect, useState } from 'react';
import * as S from './FeedModal.style';
import feed from '../../../api/feed';
import comments from '../../../api/comments';
import PROFILE from '../../../assets/icon/profile.svg';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const FeedModal = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [feedData, setFeed] = useState();

  const getFeed = async () => {
    const { data } = await feed.getFeed(id);
    setFeed(data);
  };

  useEffect(() => {
    getFeed();
  }, []);

  console.log(feedData);
  const TrySubmit = async data => {
    await comments.postComment({ content: data.content, feedId: id }, id);
  };
  return (
    <>
      {feedData && (
        <div>
          {' '}
          <S.Feed>
            <S.ProfileSection>
              <S.Profile src={PROFILE} />
              <p>{feedData.user.name}</p>
            </S.ProfileSection>
            <S.ContentSection>
              <S.Title>{feedData.title}</S.Title>
              <S.Desc>{feedData.content}</S.Desc>
            </S.ContentSection>
          </S.Feed>
          <S.Comment>
            <p>{feedData.comments?.user?.name}</p>
            {feedData.comments?.comment}
          </S.Comment>
          <form onSubmit={handleSubmit(TrySubmit)}>
            <input placeholder="댓글달기" {...register('content')} />
            <button>전송</button>
          </form>
        </div>
      )}
    </>
  );
};

export default FeedModal;
