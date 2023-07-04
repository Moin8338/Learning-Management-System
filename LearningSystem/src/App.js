import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import home from "./components/home";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Course from "./components/Admin/Course/Course";
import Add from "./components/Admin/AddCourse/Add";
import profile from "./components/Admin/profile/profile";
import viewCourse from "./components/Admin/ViewCourseDetail/ViewCourse";
import NormalUserDashboard from "./components/NormalUser/Dashboard/NormalUserDashboard"
import courses from "./components/NormalUser/CourseForUser/Course"
import viewCourseToUser from "./components/NormalUser/ViewCourseDetail/NormalUserViewCourse"
import NormalUserProfile from "./components/NormalUser/profile/NormalUserprofile"
import AdminGuard from "./components/guard/AdminGuard"
import UserGuard from "./components/guard/UserGuard"
import UpdateCourse from "./components/Admin/updateCourse/update"
import './App.css';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" Component={home}>
          </Route>
          <Route path="/admin/dashboard" element={<AdminGuard Component={Dashboard}/>}/>
          <Route path="/admin/course" element={<AdminGuard Component={Course}/>}/>
          <Route path="/admin/addCourse" element={<AdminGuard Component={Add}/>}/>
          <Route path="admin/updateCourse" element={<AdminGuard Component={UpdateCourse}/>}/>
          <Route path="/admin/profile" element={<AdminGuard Component={profile}/>}/>
          <Route path="admin/viewCourse" element={<AdminGuard Component={viewCourse}/>}/>
        </Routes>
        <Routes>
          <Route path="/" Component={home}>
          </Route>
          <Route path="/user/dashboard" element={<UserGuard Component={NormalUserDashboard}/>}/>
          <Route path="/user/course" element={<UserGuard Component={courses}/>}/>
          <Route path="/user/profile" element={<UserGuard Component={NormalUserProfile}/>}/>
          <Route path="user/viewCourse" element={<UserGuard Component={viewCourseToUser}/>}/>
        </Routes>
      </Router>
  );
}

export default App;
