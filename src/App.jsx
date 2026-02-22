import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import EmployeeDashboad from "./components/DashBoard/EmployeeDashboad";
import { AuthContext } from "./context/AuthContext";
import { toast } from "react-toastify";

const App = () => {
  const [logInUserData, setLogInUserData] = useState(null);
  const data = useContext(AuthContext);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("LoggedInUser");

    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role); // restore role
      setLogInUserData(parsedUser.user); // restore user object
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!data?.userData) return;

    // 🔹 check admin
    const admin = data.userData.members.find(
      (e) => email == e.email && password == e.password,
    );

    // 🔹 check employee
    const employee = data.userData.Boyss.find(
      (e) => email == e.email && password == e.password,
    );

    if (admin) {
      console.log("Logged Admin:", admin);

      localStorage.setItem(
        "LoggedInUser",
        JSON.stringify({ role: "Admin", user: admin }),
      );

      setLogInUserData(admin);
      setUser("Admin");
    } else if (employee) {
      console.log("Logged Employee:", employee);

      localStorage.setItem(
        "LoggedInUser",
        JSON.stringify({ role: "User", user: employee }),
      );

      setLogInUserData(employee);
      setUser("User");
    } else {
      toast("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "Admin" && <AdminDashboard data={logInUserData} />}
      {user === "User" && <EmployeeDashboad data={logInUserData} />}
    </>
  );
};

export default App;
