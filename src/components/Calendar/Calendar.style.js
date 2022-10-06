import styled from '@emotion/styled';
import { palette } from '../../palette';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;
`;

export const View = styled.div`
  width: 1052px;
  height: 253px;
  background: #ffc979;
  margin: 0 auto;
`;

export const Calendar = styled.div`
  width: 1052px;
  height: 690px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  margin-top: auto;
  overflow: hidden;
  box-sizing: border-box;

  .container {
    height: 743px !important;
  }

  .toastui-calendar-layout {
    background-color: ${({ theme }) => theme.backgroundColor} !important;
  }

  .toastui-calendar-template-monthDayName {
    color: ${({ theme }) => theme.contrast} !important;
  }

  .toastui-calendar-holiday-sun .toastui-calendar-template-monthDayName {
    color: rgb(255, 64, 64) !important;
  }

  .toastui-calendar-layout .toastui-calendar-month {
    background-color: ${({ theme }) => theme.backgroundColor3} !important;
  }

  .toastui-calendar-weekday-grid {
    border-top: 1px solid ${({ theme }) => theme.borderColor} !important;
  }

  .toastui-calendar-daygrid-cell + .toastui-calendar-daygrid-cell {
    border-left: 1px solid ${({ theme }) => theme.borderColor} !important;
  }

  .toastui-calendar-grid-cell-date {
    color: ${({ theme }) => theme.contrast} !important;
  }

  .toastui-calendar-grid-cell-date
    .toastui-calendar-weekday-grid-date.toastui-calendar-weekday-grid-date-decorator {
    background-color: ${palette.main} !important;
    color: white;
  }

  .toastui-calendar-weekday-event {
    color: ${({ theme }) => theme.contrast} !important;
  }

  .toastui-calendar-weekday-event-title {
    color: ${({ theme }) => theme.contrast} !important;
  }
`;
