import { Route, Routes } from 'react-router-dom';
import * as P from './pages';
function App() {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/setting" element={<P.Setting />} />
      <Route path="/connect" element={<P.Connect />} />
      <Route path="/user" element={<P.User />} />
      <Route path="/community" element={<P.Community />} />
      <Route path="/login" element={<P.Login />} />
    </Routes>
  );
}

export default App;
