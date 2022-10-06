import * as S from './Calendar.style';
import 'react-calendar/dist/Calendar.css';

import { useState } from 'react';

import Calendar from '@toast-ui/react-calendar';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

function CalendarComponent() {
  const [isSetting, setIsSetting] = useState(true);
  return (
    <S.Container>
      <S.View>
        {isSetting ? (
          <S.Circle>
            <S.Desc>생리</S.Desc>
            <S.Date>1일째</S.Date>
            <S.Desc>생리 주기는 28일 입니다.</S.Desc>
          </S.Circle>
        ) : (
          <>
            <S.SettingTitle>아직 주기를 설정하지 않으셨나요?</S.SettingTitle>
            <S.SettingDesc>설정하러가기</S.SettingDesc>
          </>
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
