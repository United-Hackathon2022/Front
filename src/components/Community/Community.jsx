import { Link } from 'react-router-dom';
import Feed from '../Feed/Feed';
import * as S from './Community.style';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import feed from '../../api/feed';

const Community = () => {
  const { register, setValue, watch } = useForm();
  const [list, setList] = useState();
  const getFeed = async () => {
    const { data } = await feed.getAllFeeds(watch('type'));
    console.log(data.feed_list);
    setList(data.feed_list);
  };

  useEffect(() => {
    getFeed();
  }, [watch('type')]);

  useEffect(() => {
    setValue('type', 'JOB_OFFER');
    getFeed();
  }, []);

  return (
    <S.Body>
      <S.SelectSection>
        <S.Select>
          <label>
            <input
              className="question"
              id="type"
              value="JOB_OFFER"
              type="radio"
              {...register('type', { required: true })}
            />
            <div>멘토 구하기</div>
          </label>

          <label>
            <input
              className="jobOffer"
              value="QUESTION"
              id="type"
              type="radio"
              {...register('type', { required: true })}
            />
            <div>궁금증</div>
          </label>
        </S.Select>
        <Link to="/community/write">
          <S.LinkButton>글 쓰러가기</S.LinkButton>
        </Link>
      </S.SelectSection>
      <S.FeedSection>
        {list?.map((feed, i) => {
          return (
            watch('type') === feed.type && <Feed feed={feed} key={i} id={i} />
          );
        })}
      </S.FeedSection>
    </S.Body>
  );
};

export default Community;
