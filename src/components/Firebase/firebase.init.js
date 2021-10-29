import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebse.config";

const authorizationInitialization = () =>{
    initializeApp(firebaseConfig);
}

export default authorizationInitialization;