import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { useState, useEffect } from "react";
import "./App.css";
import { Footer, Header } from './components'
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false)
      });
  }, []);

  return !loading ? (<div className="min-h-screen flex flrx-wrap content-between bg-gray-500">
<div className="w-full block ">
  <Header/>
  <main>
   <Outlet/>
  </main>
  <Footer/>
</div>
  </div> ): null;
}

export default App;
