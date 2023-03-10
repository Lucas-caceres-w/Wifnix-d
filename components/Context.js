import { createContext, useState, useEffect } from "react";

export const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = JSON.parse(localStorage.getItem("product"));
    if (storedCount) {
      //console.log(storedCount.length);
      setCount(storedCount.length);
    }
  }, []);

  return (
    <LocalStorageContext.Provider value={{ count , setCount }}>
      {children}
    </LocalStorageContext.Provider>
  );
};
