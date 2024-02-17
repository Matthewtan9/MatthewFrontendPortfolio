
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './i18n.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage';
import WorkPage  from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';
import EducationPage from './pages/EducationPage';
import ClassPage from './pages/ClassPage';
import FeedbackPage from './pages/FeedbackPage';
import ExperiencePage from './pages/ExperiencePage';
import AboutMePage from './pages/AboutMePage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/experience" element={<ExperiencePage/>}/>
          <Route path="/project" element={<ProjectPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/feedback" element={<FeedbackPage/>}/>

          

          <Route path="/experience/work" element={<WorkPage/>}/>
          <Route path="/experience/class" element={<ClassPage/>}/>
          <Route path="/experience/education" element={<EducationPage/>}/>

        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
