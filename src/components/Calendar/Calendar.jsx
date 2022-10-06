import * as S from './Calendar.style';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
import Calendar from '@toast-ui/react-calendar';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import { useLocation } from 'react-router-dom';

import PERSON from '../../assets/modal_img/person.svg';
import { BsXLg } from 'react-icons/bs';
import { Right } from '../ModalContainer/Modals.style';


function CalendarComponent() {
  const token = window.localStorage.getItem('accessToken');
  const [isSetting, setIsSetting] = useState(false);

  const [isCycleModal, setIsCycleModal] = useState(false);


  return (
    <S.Container>
      <S.View>
        {isSetting ? (
          <S.Circle>
            <S.Desc>월경</S.Desc>
            <S.Date>1일째</S.Date>
            <S.Desc>월경의 주기는 28일 입니다.</S.Desc>
          </S.Circle>
        ) : (
          <>
            <S.SettingTitle>아직 주기를 설정하지 않으셨나요?</S.SettingTitle>
            <S.SettingDesc onClick={() => setIsCycleModal(true)}>
              설정하러가기
            </S.SettingDesc>
          </>
        )}

        {isCycleModal && (
          <S.CycleModalBackground>
            <S.CycleModalContainer>
              <S.LeftWrap>
                <img style={{ width: '80%' }} src={PERSON} alt="일정 사람" />
              </S.LeftWrap>

              <S.RightWrap>
                <S.SelectWrap>
                  <BsXLg
                    style={{
                      width: ' 0.8rem',
                      color: '#333',
                      position: 'relative',
                      right: '-415px',
                      bottom: '15px',
                      cursor: 'pointer',
                    }}
                    onClick={() => setIsCycleModal(false)}
                  />
                  <div># 최근에 월경을 시작한 날짜가 언제인가요?</div>
                  <S.DateContainer>
                    <S.DateWrap>
                      <S.Start>시작일</S.Start>
                      <input style={{ padding: '0 10px' }} type="date" />
                    </S.DateWrap>
                    <S.DateWrap>
                      <S.End>종료일</S.End>
                      <input style={{ padding: '0 10px' }} type="date" />
                    </S.DateWrap>
                  </S.DateContainer>
                </S.SelectWrap>

                <S.SelectWrap>
                  <div># 월경을 했던 기간이 어떻게 되나요?</div>
                  <S.DateContainer>
                    <S.DateWrap>
                      <S.Start>시작일</S.Start>
                      <input style={{ padding: '0 10px' }} type="date" />
                    </S.DateWrap>
                    <S.DateWrap>
                      <S.End>종료일</S.End>
                      <input style={{ padding: '0 10px' }} type="date" />
                    </S.DateWrap>
                  </S.DateContainer>
                </S.SelectWrap>

                <S.SelectWrap>
                  <div># 월경을 하는 주기가 어떻게 되나요?</div>
                  <S.DateContainer>
                    <S.DateWrap>
                      <S.Start>월경 주기</S.Start>
                      <S.Cycle
                        style={{ padding: '0 10px' }}
                        type="text"
                        placeholder="댓글 달기"
                      />
                    </S.DateWrap>
                  </S.DateContainer>
                </S.SelectWrap>

                <S.SubmitBtn>제출하기</S.SubmitBtn>
              </S.RightWrap>
            </S.CycleModalContainer>
          </S.CycleModalBackground>
        )}
      </S.View>
      <S.Calendar>
        <Calendar
          height="900px"
          disableDblClick={true}
          disableClick={false}
          isReadOnly={false}
          month={{
            startDayOfWeek: 0,
          }}
          scheduleView
          taskView
          timezones={[
            {
              timezoneOffset: 540,
              displayLabel: 'GMT+09:00',
              tooltip: 'Seoul',
            },
          ]}
          useDetailPopup
          useCreationPopup
          view={'month'}
        />
      </S.Calendar>
    </S.Container>
  );
}

export default CalendarComponent;
