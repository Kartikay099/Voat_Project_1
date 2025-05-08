import { Routes, Route } from "react-router-dom";
import Register from "./Landing/components/Register";
import Login from "./Landing/components/Login";
import MainPages from "./Landing/components/MainPages";
import StudentDashboard from "./studentsComponents/components/StudentDashboard";
import StudentProfile from "./studentsComponents/components/StudentProfile";
import SchedulePage from "./studentsComponents/components/SchedulePage";
import ApplyForJobs from "./studentsComponents/components/ApplyForJobs";
import JobDetails from "./studentsComponents/components/jobView/JobDetails";
import JobApplied from "./studentsComponents/components/JobApplied";
import SupportChat from "./studentsComponents/components/Supportchat";
import "./App.css";

// Layout for student-related routes that need SupportChat
function StudentLayout({ children }) {
  return (
    <>
      {children}
      <SupportChat />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPages />} />

      {/* Student Routes with SupportChat */}
      <Route
        path="/profile"
        element={
          <StudentLayout>
            <StudentProfile />
          </StudentLayout>
        }
      />
      <Route
        path="/schedule"
        element={
          <StudentLayout>
            <SchedulePage />
          </StudentLayout>
        }
      />
      <Route
        path="/apply-for-jobs"
        element={
          <StudentLayout>
            <ApplyForJobs />
          </StudentLayout>
        }
      />
      <Route
        path="/apply-for-jobs/job-details/:id"
        element={
          <StudentLayout>
            <JobDetails />
          </StudentLayout>
        }
      />
      <Route
        path="/applied-jobs"
        element={
          <StudentLayout>
            <JobApplied />
          </StudentLayout>
        }
      />
    </Routes>
  );
}

export default App;
