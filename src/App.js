import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './homecomponents/Home';
import Contact from './Contact';
import About from '../src/homecomponents/About';
import Sort from './sortComponents/Sort'
import Prime from './primeComponents/seive'
import RecursiveSort from "./recursiveSortComponents/Recursivesort";
import Nqueen from './queenComponents/queen'
function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path='sort' element={<Sort/>}/>
          <Route path='prime' element={<Prime/>}/>
          <Route path='/recursivesort' element={<RecursiveSort/>}/>
          <Route path='/nqueen' element={<Nqueen/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
