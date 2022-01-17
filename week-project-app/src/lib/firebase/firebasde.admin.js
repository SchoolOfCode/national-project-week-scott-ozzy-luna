import * as firebaseAdmin from "firebase-admin";
import data from "./school-of-code-firebase-adminsdk-6v9uh-36579c9ea4.json";

if (!firebaseAdmin.apps.length) {
   firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert({
         privateKey: data.private_key,
         clientEmail: data.client_email,
         projectId: data.project_id,
      }),
   });
}

export { firebaseAdmin };
