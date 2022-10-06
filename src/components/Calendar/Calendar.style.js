import styled from '@emotion/styled';
import { palette } from '../../shared/styles/palette';

export const Container = styled.div`
  height: calc(100vh - 60px);
  width: 1052px;
  margin: 0 auto;
  background: #f5f5f5;
`;

export const View = styled.div`
  width: 100%;
  height: 253px;
  background: ${palette.main};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 5px solid #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

export const Desc = styled.p`
  font-size: 1rem;
  line-height: 18px;
`;

export const Date = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 31px;
  margin: 20px 0 15px;
`;

export const SettingTitle = styled.h1`
  font-size: 40px;
  font-family: 'TmoneyRoundWindExtraBold';
  color: #fff;
  margin-bottom: 30px;
`;

export const SettingDesc = styled.button`
  width: 200px;
  height: 50px;
  background: #ffffff;
  border-radius: 20px;
  font-family: 'TmoneyRoundWindExtraBold';
  font-size: 20px;
  line-height: 26px;
  color: #515151;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  &:active {
    transform: scale(0.95);
  }
`;

export const Calendar = styled.div`
  width: 100%;
  height: 800px;
  margin: 0 auto;
  border: 1px solid #f0eff2 !important ;
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
    border-top: 1px solid #f0eff2 !important;
  }

  .toastui-calendar-daygrid-cell + .toastui-calendar-daygrid-cell {
    border-left: 1px solid #f0eff2 !important;
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

export const CycleModalBackground = styled.div`
  position: fixed;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.28);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CycleModalContainer = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  background-color: #fff;
`;

export const LeftWrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
  padding-right: 40px;
  border-right: 1px solid ${palette.gray[200]};
`;

export const RightWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 20px;
  margin-left: 50px;
`;

export const SelectWrap = styled.div``;

export const DateWrap = styled.div`
  display: grid;
  align-items: center;
  padding: 10px;
`;

export const DateContainer = styled.div`
  display: flex;
`;

export const Start = styled.div`
  padding: 10px 0;
  color: ${palette.gray[500]};
`;

export const End = styled.div`
  padding: 10px 0;
  color: ${palette.gray[500]};
`;

export const Cycle = styled.input`
  outline: none;
  border: 1px solid ${palette.gray[400]};
`;

export const SubmitBtn = styled.button`
  width: 77%;
  display: flex;
  justify-content: center;
  background-color: ${palette.main};
  border: none;
  padding: 12px;
  border-radius: 5px;
`;
