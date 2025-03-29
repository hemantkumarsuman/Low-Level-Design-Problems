import Body from './components/Body';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import Comments from './components/NestedComment/Comments';
import Slider from './components/ImageSlider/Slider';
import Pagination from './components/Pagination/Pagination';
import SearchUi from './components/AutoCompleteSearchBar/SearchUi';
import InputBox from './components/InputBoxQuestions/InputBox';


function App() {
  return (
    <div>
      <header className="text-2xl font-bold py-5 bg-black text-white text-center flex justify-between">
        Hello World
        <nav className="px-20 m-2 w-[1000px] flex justify-between text-lg">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/comments">Nested Comments </a>
          <a href='/slider'>Image Slider</a>
          <a href='/autocomplete'>AutoComplete-SearchBar</a>
          <a href='/InputBox'>InputBox</a>
        </nav>        
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
          <Route path="/slider" element={<Slider />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/autocomplete" element={<SearchUi />}></Route>
          <Route path="/inputBox" element={<InputBox />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
