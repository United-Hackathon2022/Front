import { Link } from 'react-router-dom';
import Feed from '../Feed/Feed';
import * as S from './Community.style';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import feed from '../../api/feed';

const Community = () => {
  const { register, setValue, watch } = useForm();

  useEffect(() => {
    setValue('type', 'JOB_OFFER');
    console.log();
    const res = feed.getAllFeeds();
  }, []);

  const feedList = [
    {
      id: 1,
      title: '제목',
      content:
        '아니 이거 우리 몇시간 넘게 디자인만 하고 있어 우리 개발은 언제아니 이거 우리 몇시간 넘게아니 이거 우리 몇시간 넘게 디자인만 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ 오늘은 우리 개발만 하고 있어 개발만 몇시간 넘게 하고 있는데 근데 디자인 보다 재밌는데 이거맞는거지? 아니 이거 우리 몇시간 넘게 개발하고 있어',
      type: 'QUESTION',
      user: {
        name: '유시온',
        profileImage: 'https://github.com/yoosion030.png',
      },
    },
    {
      id: 1,
      title: '제목',
      content: '내용',
      type: 'QUESTION',
      user: {
        name: '유시온',
        profileImage: 'https://github.com/yoosion030.png',
      },
    },
    {
      id: 1,
      title: '제목',
      content: '내용',
      type: 'JOB_OFFER',
      user: {
        name: '유시온',
        profileImage: 'https://github.com/yoosion030.png',
      },
    },
  ];

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
            <div>멘토에게 질문</div>
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
        {feedList.map((feed, i) => {
          return (
            watch('type') &&
            watch('type') === feed.type && <Feed feed={feed} key={i} />
          );
        })}
      </S.FeedSection>
    </S.Body>
  );
};

export default Community;
