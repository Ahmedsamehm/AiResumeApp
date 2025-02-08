import { db } from "@/Config/firebase";

import { collection, doc, setDoc } from "firebase/firestore";

export default function useCreateCollectionRef() {
  async function addDocument(
    userId,
    documentId,
    CollectionName,
    userInfo,
    ResumeId
  ) {
    try {
      const Collections = collection(
        db,
        "users",
        userId,
        "resumes",
        ResumeId,
        CollectionName
      );
      const docRef = doc(Collections, documentId);
      await setDoc(docRef, userInfo);

      console.log("add document");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  }

  return { addDocument };
}
