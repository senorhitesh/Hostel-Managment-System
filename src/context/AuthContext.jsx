import { createContext, useState, useEffect } from "react";
import { getlocalStroge } from "../utils/LocalStroage";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = getlocalStroge();

    if (data) {
      const { Boyss, members } = data;
      setUserData({ Boyss, members });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
