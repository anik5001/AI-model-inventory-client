import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleWithSigninFun = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = { user, setUser, loading, setLoading, googleWithSigninFun };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
