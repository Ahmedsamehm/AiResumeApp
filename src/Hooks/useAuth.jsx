import React, { useEffect, useState, useCallback } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/Config/firebase";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const navigate = useNavigate();
  const handleLogin = useCallback(async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUserId(userCredential?.user?.uid);
      localStorage.setItem("userId", userCredential?.user?.uid);

      setTimeout(() => {
        navigate("/");
      }, 1000);

      setError("");
    } catch (error) {
      console.error("Login error:", error.message);
      setError("Login failed. Please check your email and password.");
    }
  }, []);

  const handleRegister = useCallback(async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered successfully:", userCredential.user);
      setError("");
    } catch (error) {
      console.error("Registration error:", error.message);
      setError("Registration failed. Please check your email and password.");
    }
  });

  const handleGoogleLogin = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Logged in with Google:", result.user);
      setUserId(result.user.uid);
      localStorage.setItem("userId", result.user.uid);
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  }, []);

  const logoutUser = useCallback(async () => {
    try {
      await auth.signOut();
      setUserId(null);
      localStorage.removeItem("userId");
      console.log("Logged out successfully.");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserId(user.uid);
        localStorage.setItem("userId", user.uid);
      } else {
        setUser(null);
        setUserId(null);
        localStorage.removeItem("userId");
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    error,
    handleLogin,
    handleRegister,
    handleGoogleLogin,
    userId,
    logoutUser,
  };
}
