import React, { createContext, useContext, useState } from 'react';


export const StudentContext = createContext();

export const DataContext = () => useContext(StudentContext);

export default function Context({ children }) {
  const [data, setData] = useState([
    { id: 1, name: "Eshmat", status: "talaba" },
    { id: 2, name: "Toshmat", status: "talaba" },
    { id: 3, name: "Gulmat", status: "talaba" },
    { id: 4, name: "Bermat", status: "talaba" },
    { id: 5, name: "Xolmat", status: "talaba" },
  ])
  return (
    <StudentContext.Provider value={ [data, setData] }>
      { children }
    </StudentContext.Provider>
  )
}
