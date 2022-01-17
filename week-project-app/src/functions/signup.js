import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export async function signUp({ email, password }) {
   try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      firebase.auth().onIdTokenChanged(async (user) => {
         const token = await user?.getIdToken();
         console.log(token);
         //  await post("/api/signin", { token });

         //  window.location.href = "/";
      });
   } catch (error) {
      console.log(error);
   }
}
