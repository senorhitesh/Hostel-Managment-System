import { use, useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import EmployeeDashboad from "./components/DashBoard/EmployeeDashboad";
import { getlocalStroge, setlocalStroge } from "./utils/LocalStroage";
import { AuthContext } from "./context/AuthContext";
const data = useContext(AuthContext);

const App = () => {
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
      alert("Invalid Credentials");
    }
  };

  console.log(data.userData.Boyss);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "Admin" && <AdminDashboard />}
      {user === "User" && <EmployeeDashboad />}
    </>
  );
};

export default App;
