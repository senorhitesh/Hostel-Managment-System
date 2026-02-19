import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContext from "./context/AuthContext.jsx";
 import { ToastContainer} from 'react-toastify';
createRoot(document.getElementById("root")).render(
  <AuthContext>
        <App />
        <ToastContainer/>
  </AuthContext>,
);
