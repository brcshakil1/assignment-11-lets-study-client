import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { PropTypes } from "prop-types";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const axios = useAxios();

  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signInUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (currentUser, userProfile) => {
    return updateProfile(currentUser, userProfile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;

      setLoading(false);
      setUser(currentUser);

      if (currentUser) {
        const loggerEmail = { email: userEmail };
        axios.post("/auth/jwt-token", loggerEmail).then((res) => {
          console.log(res.data);
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, axios, user?.email]);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleSignIn,
    githubSignIn,
    updateUserProfile,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
