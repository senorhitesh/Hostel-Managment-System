import { use, useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import EmployeeDashboad from "./components/DashBoard/EmployeeDashboad";
import { getlocalStroge, setlocalStroge } from "./utils/LocalStroage";
import AuthContext from "./context/AuthContext";

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    if (email == "shatilal@admin.com" && password == 123) {
      setUser("Admin");
    } else if (email == "hitesh@example.com" && password == 123) {
      setUser("User");
    } else {
      alert("Invalid Credentials");
    }
  };

  const data = useContext(AuthContext);
  console.log(data)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "Admin" ? <AdminDashboard /> : <EmployeeDashboad />}
    </>
  );
};

export default App;