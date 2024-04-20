// 'use client'

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const checkAuthStatus = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/auth/check-auth', {
//         credentials: 'include', // Include credentials for CORS requests
//       });
//       const data = await response.json();
//       if (data.username) {
//         setUser(data.username); // Set the user if authenticated
//       } else {
//         setUser(null); // Clear the user if not authenticated
//       }
//     } catch (error) {
//       console.error("Failed to check authentication status:", error);
//     }
//   };

//   const logout = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/auth/logout', {
//         method: 'GET',
//         credentials: 'include', // Include credentials for CORS requests
//       });
//       if (response.ok) {
//         setUser(null); // Clear the user on successful logout
//       }
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   useEffect(() => {
//     checkAuthStatus(); // Check auth status when the component mounts
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
