import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    user: {},
    isLoading: false,
    login() {},
    logout() {},
    register() {},
})





function AuthProvider({ children }) {
const [user, setUser] = useState({})
const [isLoading, setIsLoading] = useState(false)

const isLoggedIn = !!user;


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
logout
}


  return (
    <AuthContext.Provider value={authCtx} >{children}</AuthContext.Provider>
  )
}

export default AuthProvider

export function useAuthCtx(){
return useContext(AuthContext)
}
