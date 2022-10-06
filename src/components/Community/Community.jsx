import { Link } from 'react-router-dom';
import Feed from '../Feed/Feed';
import * as S from './Community.style';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import feed from '../../api/feed';
import axios from 'axios';
import { FeedController } from '../../Utils/Libs/requestUrls';
import { useRecoilState } from 'recoil';
import { AddFeed } from '../../Atoms';

export const feedList = [
  {
    id: 1,
    title: '멘토 구해요',
    content:
      '어제 초경을 시작한 초등학교 5학년입니다.. 아직 엄마한테 고민같은걸 털어놓기가 힘든 것 같아요. 이런 저런 고민 들어줄 멘토분 구합니다. 초대코드는 1PXKA2입니다. 연락주세요!',
    type: 'JOB_OFFER',
    user: {
      name: '유시온',
      profileImage: 'https://github.com/yoosion030.png',
    },
    other: {
      name: '금현호',
      comment: '멘토 신청하였습니다! 확인해주세요.',
    },
  },
  {
    id: 1,
    title: '도와주세요 😭',
    content:
      '제가 어제 초경을 시작하였는데 어떻게 부모님한테 말을 해야할지 모르겠어요.. 아직 잘 모르는 부분도 많아 이것저것 알려주는 멘토분을 구합니다. 1PXKA2',
    type: 'JOB_OFFER',
    user: {
      name: '유시온',
      profileImage: 'https://github.com/yoosion030.png',
    },
    other: {
      name: '멍멍',
      comment:
        '저도 그랬던 적이 있었어요.. 말 안하는 것보다 최대한 빨리 말할 수록 좋은 것 같아요! 멘토 신청도 했습니다.',
    },
  },
  {
    id: 1,
    title: '피임약',
    content:
      '제가 다음주에 워터파크로 놀러가는데 예정일이랑 겹칠 것 같네요 ㅜㅜ 이럴 때 피임약 복용해도 되나요?',
    type: 'QUESTION',
    user: {
      name: '유시온',
      profileImage: 'https://github.com/yoosion030.png',
    },
    other: {
      name: '1004',
      comment: '넵! 복용한 날짜 기록해두시면 더 좋을 것 같아요',
      answer: '감사합니다!',
    },
  },
];

const Community = () => {
  const { register, setValue, watch } = useForm();
  const getFeed = async () => {
    const res = await axios({
      method: 'get',
      url: FeedController.getFeeds() + 'QUESTION',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
      },
    });
    console.log(res);
  };
  const [addFeed, setAddFeed] = useRecoilState(AddFeed);
  useEffect(() => {
    addFeed &&
      feedList.push({
        id: 1,
        title: '생리통 약',
        content: '다들 생리통이 심하시면 무슨 약을 드시나요?',
        type: 'QUESTION',
        user: {
          name: '유시온',
          profileImage: 'https://github.com/yoosion030.png',
        },
      });
    console.log(addFeed);
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
            watch('type') === feed.type && <Feed feed={feed} key={i} id={i} />
          );
        })}
      </S.FeedSection>
    </S.Body>
  );
};

export default Community;
