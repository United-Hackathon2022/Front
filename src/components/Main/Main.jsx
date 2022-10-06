import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CalendarComponent from '../Calendar/Calendar';
import Auth from '../../api/auth';

const Main = () => {
  const location = useLocation();
  const code = location.search.split('=')[1];

  const handleToken = async () => {
    console.log(code);
    if (code) {
      const data = await Auth.signin({ code });
      console.log(data);
    }
  };
  useEffect(() => {
    handleToken();
  }, [code]);
  return (
    <>
      <CalendarComponent />
    </>
  );
};

export default Main;
