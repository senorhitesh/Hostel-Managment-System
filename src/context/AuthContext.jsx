import { createContext, useState, useEffect } from "react";
import { getlocalStroge, setlocalStroge } from "../utils/LocalStroage";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let data = getlocalStroge();

    // ✅ if storage empty → initialize it
    if (!data?.Boyss || !data?.members) {
      setlocalStroge();
      data = getlocalStroge();
    }

    const { Boyss, members } = data;
    setUserData({ Boyss, members });
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;