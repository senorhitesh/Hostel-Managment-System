import { useEffect } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import EmployeeDashboad from "./components/DashBoard/EmployeeDashboad";
import { getlocalStroge, setlocalStroge } from "./utils/LocalStroage";

const App = () => {
  useEffect(() => {
    setlocalStroge()
    getlocalStroge() 
  })
  
  return <>
  {/* <Login/> */}
  <EmployeeDashboad/>
  {/* <AdminDashboard/> */}
  </>;
};

export default App;
