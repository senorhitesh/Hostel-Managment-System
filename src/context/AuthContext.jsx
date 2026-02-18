import { createContext, useState, useEffect } from "react";
import { getlocalStroge } from "../utils/LocalStroage";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const {Boyss,members} = getlocalStroge();
    setUserData({Boyss,members})
  }, []);
  console.log(userData)

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
