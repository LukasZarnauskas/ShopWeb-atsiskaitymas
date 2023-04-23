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
const [notice, setNotice] = useState({
    show: false,
    msg: '',
    type: '',
})

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      
      
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
    showSuccess(msg = '') {
      setNotice({
        show: true,
        msg: msg || 'Success',
        type: 'success',
      });
    },
    showError(msg = '') {
      setNotice({
        show: true,
        msg: msg || 'Error',
        type: 'error',
      });
    },
    showLoading(msg = '') {
      setNotice({
        show: true,
        msg: msg || 'Loading',
        type: 'loading',
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

function logout() {
setUser(null)
}


const authCtx = {
user,
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
