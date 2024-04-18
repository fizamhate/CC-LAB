import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import {useAuth0} from "@auth0/auth0-react";


function App() {
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  return (
    <>
    {
      isAuthenticated?
      
        <button class="text-white" onClick={(e)=>logout()}>Logout</button>
      
       : <button class="text-white" onClick={(e) => loginWithRedirect()}>Login with Redirect</button>
    }
    
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
    
    </>
  );
}

export default App;
