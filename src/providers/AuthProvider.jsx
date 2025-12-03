import React, { createContext, useState, useEffect } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithPopup, 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile} from 'firebase/auth';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    // 1. Register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // 2. Login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // 3. Google Login
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // 4. Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // 5. Update Profile (Challenge Requirement)
    const profileUpdate = (name, photoUrl) => {
        // Firebase updateProfile is a function, not a getter/setter
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoUrl
        });
    };

    // Auth State Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log("User in the auth state observer:", currentUser); // Debugging
            setUser(currentUser);
            setLoading(false); 
        });
        // Cleanup function
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        profileUpdate,
        auth // Passing auth for password reset challenge
    };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;