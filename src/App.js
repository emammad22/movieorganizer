import './App.css';
import { Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/list' element={<ListPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
