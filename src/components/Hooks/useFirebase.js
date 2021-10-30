import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import authorizationInitialization from "../Firebase/firebase.init";

authorizationInitialization();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    const handleGoogleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)
           .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(()=> setIsLoading(false));
    };

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
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
        isLoading,
        handleGoogleSignIn,
        logOut
    };

};
export default useFirebase;