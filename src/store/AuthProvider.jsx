import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = createContext({
    user: {},
    isLoading: false,
    login() {},
    logout() {},
    register() {},
    notice:{
      show: false,
      msg: '',
      type: '',
    },
    ui: {},
})





function AuthProvider({ children }) {
const [user, setUser] = useState({})
const [isLoading, setIsLoading] = useState(false)
const [notice, setNotice] = useState({
    show: false,
    msg: '',
    type: '',
})

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid
      
      console.log('prisijungimas', user.email);
      setUser(user);
      setNotice({
        show: true,
        msg: 'User logged in',
        type: 'success',
      });
    } else {
      console.log('Logout User');
      setUser(null);
    }
  });
}, []);

const { show, msg } = notice;
  useEffect(() => {
    if (show === true && msg !== 'Loading') {
      setTimeout(() => {
        setNotice({
          show: false,
          msg: '',
          type: '',
        });
      }, 3000);
    }
  }, [show, msg]);

const isLoggedIn = !!user;

const ui = {
    showSuccess() {
      setNotice({
        show: true,
        msg: 'Success',
        type: 'success',
      });
    },
    showError() {
      setNotice({
        show: true,
        msg: 'Klaida',
        type: 'error',
      });
    },
    closeAlert() {
      setNotice({
        show: false,
        msg: '',
        type: '',
      });
    },
  };

function login(userObj) {
setUser(userObj)
}
function logout() {
setUser(null)
}

const authCtx = {
user,
isLoading,
login,
isLoggedIn,
logout,
notice,
ui,
}


  return (
    <AuthContext.Provider value={authCtx} >{children}</AuthContext.Provider>
  )
}

export default AuthProvider

export function useAuthCtx(){
return useContext(AuthContext)
}
