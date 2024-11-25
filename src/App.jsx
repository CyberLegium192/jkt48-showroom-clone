// INFO STRAMING HISTORY MEMBER IDN OR SHOWROOM
// https://api.crstlnz.my.id/api/recent?sort=date&page=1&filter=all&order=-1&perpage=6&search=&room_id=510012&group=jkt48&type=all

// INFO COMMANT STRAMING 
// https://sorum-mobile.vercel.app/api/lives/comments/510012/comment
// ONLIVE
// https://api.crstlnz.my.id/api/idn_lives
// IDN INFO ROOM MEMBER 
// https://api.crstlnz.my.id/api/watch/MEMBERNAME/idn
import Home from './pages/home/home'
import Live from "./pages/live/live"
import Sidebar from './component/sidebar/sidebar'
import { Route, Routes } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <>
    <Sidebar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/showroom' element={<Live />} />
      </Routes>
    </Sidebar>
    </>
  );
}
export default App
