import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import EmployeeDashboad from "./components/DashBoard/EmployeeDashboad";
import { AuthContext } from "./context/AuthContext";
import { toast } from "react-toastify";

const App = () => {
  const [logInUserData, setLogInUserData] = useState(null);
  const data = useContext(AuthContext);

  // useEffect(() => {
  //  if(data){
  //   const LoggedInUser = localStorage.getItem("LoggedInUser");
  //   if(LoggedInUser){
  //     setUser(LoggedInUser.role)
  //   }
  //  }
  // }, [data])

  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    if (data) {
      const employee = data.userData.members.find(
        (e) => email === e.email && password == e.password,
      );
      if (employee)
        localStorage.setItem("LoggedInUser", JSON.stringify({ role: `Admin` }));
      setLogInUserData(employee);
      setUser("Admin");
    } else if (data) {
      const user = data.userData.Boyss.find(
        (e) => email === e.email && password == e.password,
      );
      if (user) {
        localStorage.setItem("LoggedInUser", JSON.stringify({ role: `User` }));
        setLogInUserData(user);
        setUser("User");
      }
    } else {
      toast("Invalid Credentials");
    }
  };
  console.log(setLogInUserData)

  console.log(data?.userData?.Boyss);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "Admin" && <AdminDashboard />}
      {user === "User" && <EmployeeDashboad data={logInUserData}/>}
    </>
  );
};

export default App;
