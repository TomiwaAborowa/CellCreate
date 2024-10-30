import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/homepage";
import MyForm from './pages/formpage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/form" element={<MyForm/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
