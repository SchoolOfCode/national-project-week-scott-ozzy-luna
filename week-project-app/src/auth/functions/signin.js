import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { post } from "../../lib/http_functions/post";

export const _signIn = async () => {
   const email = "123@12.com";
   const password = "testTOOMe12221";

   try {
      await firebase.auth().signInWithEmailAndPassword(email, password);

      firebase.auth().onIdTokenChanged(async (user) => {
         const token = await user?.getIdToken();
         console.log(token);
         await post("/api/signin", { token });
      });
   } catch (error) {
      console.log(error);
   }
};
