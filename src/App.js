import './App.css';
import Appbar from './components/AppBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AdminNavbar from './components/AdminAppbar';
import UserNavbar from './components/UserAppbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import AddUser from './components/adduser';
import ViewUsers from './components/viewusers';
import DeleteUser from './components/deleteuser';
import EditUser from './components/edituser';
import AddItem from './components/additem';
import ViewItem from './components/viewitem';
import DeleteItem from './components/deleteitem';
import EditItem from './components/edititem';
import Feedback from './components/feedback';
import Gallery from './components/viewgallery';
import ViewFeedback from './components/viewfeeback';
import UserDanceGallery from './components/userdancegallery';
import UserFoodGallery from './components/userfoodgallery';
import TourismGallery from './components/famoustourismplaces';
import IndianFestivals from './components/indianfestivals';

function App() {
  // Inline styling for the header with the external background image
  const headerStyle = {
    backgroundImage: 'url(https://www.iul.ac.in/Admissioninfointernational/images/About_Lucknow_Bottum.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px', // Adjust height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional: Add text shadow for better readability
  };

  return (
    <Router>
      <div className="App">
        <header style={headerStyle}>
          <h1></h1>
        </header>
        
        <div className='App-body'>
          <Routes>
            <Route path="/" element={<><Appbar/><Home/></>}/>
        <Route path="/signin" element={<><Appbar/><SignIn/></>} />
        <Route path="/signup" element={<><Appbar/><SignUp/></>} />
        <Route path="/adminnav" element={<><AdminNavbar/></>} />
        <Route path="/admin/adduser" element={<><AdminNavbar/><AddUser/></>}/>
        <Route path="/admin/viewusers" element={<><AdminNavbar/><ViewUsers/></>}/>
        <Route path="/admin/deleteuser" element={<><AdminNavbar/><DeleteUser/></>}/>
        <Route path="/admin/edituser" element={<><AdminNavbar/><EditUser/></>}/>
        <Route path="/admin/additem" element={<><AdminNavbar/><AddItem/></>}/>
        <Route path="/admin/viewitem" element={<><AdminNavbar/><ViewItem/></>}/>
        <Route path="/admin/deleteitem" element={<><AdminNavbar/><DeleteItem/></>}/>
        <Route path="/admin/edititem" element={<><AdminNavbar/><EditItem/></>}/>
        <Route path="/usernav" element={<><UserNavbar/></>} />
        <Route path="/usernav/viewgallery" element={<><UserNavbar/><Gallery/></>} />
        <Route path="/usernav/feedback" element={<><UserNavbar/><Feedback/></>} />
        <Route path="/admin/viewfeedback" element={<><AdminNavbar/><ViewFeedback/></>} />
        <Route path="/usernav/userdancegallery" element={<><UserNavbar/><UserDanceGallery/></>} />
        <Route path="/usernav/userfoodgallery" element={<><UserNavbar/><UserFoodGallery/></>} />
        <Route path="/usernav/famoustourismplaces" element={<><UserNavbar/><TourismGallery/></>} />
        <Route path="/usernav/indianfestivals" element={<><UserNavbar/><IndianFestivals/></>}/>











          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;