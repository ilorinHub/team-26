import Home from "./organisms/Home";
import "./styles/global.css";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./organisms/LoginForm";
import Auth from "./organisms/Auth";
import Register from "./organisms/Register";
import Dashboard from "./organisms/Dashboard";
import Compose from "./component/Compose";
import Teacher from "./component/Teacher";
import SingleTeacher from "./organisms/SingleTeacher";
import LeaveRequest from "./organisms/LeaveRequest";
import MsgView from "./component/MsgView";
import Memo from "./molecules/Memo";
import Landingpage from "./organisms/Landingpage";
import { ToastContainer } from "react-toastify";

function App() {
  const teacherList = [
    {
      id: 1,
      name: "Alabi Daud",
    },
    {
      id: 2,
      name: "Alice Monday",
    },
    {
      id: 3,
      name: "Alice Monday",
    },
    {
      id: 4,
      name: "Alice Monday",
    },
    {
      id: 5,
      name: "Alice Monday",
    },
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/get-started" element={<Auth />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard/admin" element={<Dashboard />} />
        <Route path="/dashboard-compose" element={<Compose />} />
        <Route path="/dashboard/leave-request" element={<LeaveRequest />} />
        <Route
          path="/dashboard/teacher"
          element={<Teacher teacherList={teacherList} />}
        />
        <Route
          path="/dashboard/teacher/:id"
          element={<SingleTeacher teacherList={teacherList} />}
        />

        <Route
          path="/dashboard/memo/inbox/"
          element={
            <MsgView
              subject="Subject"
              id="KWC/CRD_1"
              priority="High"
              box="inbox"
              sender="sender"
              time="4:30"
              message={
                "I am writing to express my appreciation for the education and opportunities that your school has provided me with. The dedicated teachers and staff have not only helped me to excel academically, but also to grow as an individual. \n I have had a wonderful experience at your school and I will always remember the memories and friendships that I have made here. Thank you again for everything.Sincerely, Imran Adeniran"
              }
            />
          }
        />
        <Route path="/dashboard/admin/memos" element={<Memo />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
