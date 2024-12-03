import React, { useState, useEffect } from 'react';
import Mainlayout from "./Layout/Mainlayout";
import Homepage from "./Pages/Homepage";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout />}>
        <Route index element={<Homepage />} />
      </Route>
    )
  );

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
};

export default App;
