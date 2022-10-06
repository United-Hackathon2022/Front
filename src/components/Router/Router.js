import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as C from '../index';

const Router = () => {
  return (
    <BrowserRouter>
      <C.Nav />
      <Routes>
        <Route path="/" element={<C.Main />} />
        <Route path="user" element={<C.Main />} />
        <Route path="conncet" element={<C.Connect />} />
        <Route path="community" element={<C.Community />} />
        <Route path="community/write" element={<C.Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
