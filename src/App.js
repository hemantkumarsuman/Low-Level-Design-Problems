import Body from './components/Body';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import Comments from './components/NestedComment/Comments';


function App() {
  return (
    <div>
      <header className="text-2xl font-bold py-5 bg-black text-white text-center flex">
        Hello World
        <nav className="px-20 m-2 w-[600px] flex justify-between text-lg">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/comments">Nested Comments </a>
        </nav>        
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
