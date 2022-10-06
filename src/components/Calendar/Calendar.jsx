import * as S from './Calendar.style';
import 'react-calendar/dist/Calendar.css';

import { useState } from 'react';

import Calendar from '@toast-ui/react-calendar';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

function CalendarComponent() {
  const [isSetting, setIsSetting] = useState(false);
  return (
    <S.Container>
      <S.View>
        {isSetting ? (
          <div></div>
        ) : (
          <S.SettingTitle>아직 주기를 설정하지 않으셨나요?</S.SettingTitle>
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
