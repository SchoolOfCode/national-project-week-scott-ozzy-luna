import * as firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
   firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert({
         privateKey: process.env.NEXT_LOCAL_PRIVATE_KEY,
         clientEmail: process.env.NEXT_LOCAL_CLIENT_EMAIL,
         projectId: process.env.NEXT_LOCAL_PROJECT_ID,
      }),
   });
}

export { firebaseAdmin };
