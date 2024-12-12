// INFO DETAIL ROOM STRAMING HISTORY MEMBER IDN OR SHOWROOM
// https://api.crstlnz.my.id/api/recent?sort=date&page=1&filter=all&order=-1&perpage=6&search=&room_id=510012&group=jkt48&type=all

// INFO COMMANT STRAMING 
// https://sorum-mobile.vercel.app/api/lives/comments/510012/comment



// ONLIVE IDN
// https://api.crstlnz.my.id/api/idn_lives
// https://api.crstlnz.my.id/api/now_live?group=jkt48
// ROOM JELAS
// https://api.crstlnz.my.id/api/sousenkyo/member/(room_idd)/room_id


// ONLIVE SHOWROOM
// https://sorum-mobile.vercel.app/api/rooms/onlives


// IDN INFO ROOM MEMBER 
// https://api.crstlnz.my.id/api/watch/MEMBERNAME/idn
import './App.css'
import Sidebar from './component/sidebar/sidebar'
import {Home} from './pages/home/home'
import NewsPage from './pages/news/news'
import Schedule from './pages/schedule/schedule'
import HistoryLive from './pages/historyLive/historyLive'
import DetailLive from './pages/historyLive/detailLive'
import { Route, Routes, Navigate } from 'react-router-dom';
import StreamingRoom from './pages/streaming/streaming'
import MultiIdn from "./pages/multi-stream/multiIdn"

function App() {
  return (
    <>
    <Sidebar>
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/history-live' element={<HistoryLive />} />
        <Route path='/detail-live/:nickname/:data_id' element={<DetailLive />} />
        <Route path='/streaming/:type/:url' element={<StreamingRoom />} />
        <Route path='/multi-idn' element={<MultiIdn />} />
      </Routes>
    </Sidebar>
    </>
  );
}
export default App
