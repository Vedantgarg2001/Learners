import {BrowserRouter ,Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/About-us/AboutUs';
import Courses from './components/Courses-section/Courses';
import FreeCourse from './components/Free-course-section/FreeCourse';
import Testimonials from './components/Testimonial/Testimonials';
import Logins from './components/Login/Logins';
import Signup from './components/Signup/Signups';
import Home from './pages/Home';
import Header from './components/Header/Header';
import ChooseUs from './components/Choose-us/ChooseUs';

function App() {
  return <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' element={<Home />} exact /> 
      <Route path='/about' element={<AboutUs />}  /> 
      <Route path='/courses' element={<><Courses/><FreeCourse/></>}  /> 
      <Route path='/blogs' element={<Testimonials />}  /> 
      <Route path='/pages' element={<ChooseUs />}  /> 
      <Route path='/login' element={< Logins/>}  />
      <Route path='/signup' element={<Signup/>}  /> 
       

    </Routes>
  </BrowserRouter>
}

export default App;
