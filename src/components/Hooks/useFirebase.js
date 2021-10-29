import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import authorizationInitialization from "../Firebase/firebase.init";

authorizationInitialization();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)

            });
    };

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
          });
    },[auth])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {

        });

    }
    return {
        user,
        error,
        handleGoogleSignIn,
        logOut
    };

};
export default useFirebase;