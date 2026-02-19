import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import EmployeeDashboad from "./components/DashBoard/EmployeeDashboad";
import { AuthContext } from "./context/AuthContext";
 import {  toast } from 'react-toastify';

const App = () => {
  const data = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    if (
      data.userData.members.find(
        (e) => email === e.email && password == e.password,
      )
    ) {
      setUser("Admin");
    } else if (
      data.userData.Boyss.find(
        (e) => email === e.email && password == e.password,
      )
    ) {
      setUser("User");
    } else {
      toast("Invalid Credentials");
    }
  };

  console.log(data?.userData?.Boyss);

  return (
    <>
      <Toster />

      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "Admin" && <AdminDashboard />}
      {user === "User" && <EmployeeDashboad />}
    </>
  );
};

export default App;
