import './App.css';
import { Route, Routes } from 'react-router-dom';
import YoutubeHome from './components/YoutubeHome';
import Navbar from './components/Navbar';
import {Toaster} from 'react-hot-toast'
import Login from './components/Login';
import YoutubeSingleVid from './components/YoutubeSingleVid';
import History from './components/History';
import You from './components/You';

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
            
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <Navbar/>
      <Routes>
        <Route path='/' element={<YoutubeHome />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/video' element={<YoutubeSingleVid/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/you' element={<You/>}/>
      </Routes>
    </div>
  );
}

export default App;