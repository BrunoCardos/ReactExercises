import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import All from './pages/all/all';
import Images from './pages/images/images';
import Videos from './pages/videos/videos';
import Layout from './pages/layout/layout';
import CounterPage from './pages/counterPage/CounterPage';
import TodoPage from './pages/todopage/TodoPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<All />} />
          <Route path="images" element={<Images />} />
          <Route path="videos" element={<Videos />} />
          <Route path="counterPage" element={<CounterPage />} />
          <Route path="todoPage" element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>

    
    
  );
}

export default App;
