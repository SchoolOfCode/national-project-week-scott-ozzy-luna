import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAuthContent } from "../auth/auth.context";
import { firebaseAdmin } from "../lib/firebase/firebasde.admin";

function Dashboard() {
   const { _signIn } = useAuthContent();
   //    _signIn();
   return <div>dashboard</div>;
}

export async function getServerSideProps({ req, res }) {
   const unauthorizedReturn = {
      redirect: {
         destination: "/",
      },
   };

   try {
      const uid = await firebaseAdmin.auth().verifyIdToken(req.cookies.token);

      console.log(uid);

      if (!uid) {
         return unauthorizedReturn;
      }

      return {
         props: {
            access: true,
         },
      };
   } catch (err) {
      return unauthorizedReturn;
   }
}

export default Dashboard;
