import { db } from "@/Config/firebase";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import useAuth from "./useAuth";
import { useCallback, useEffect, useState } from "react";

export default function useResume() {
  const { userId } = useAuth();
  const [cards, setCards] = useState([]);
  const [collections, setCollections] = useState([]);
  const [resumeDataFetched, setResumeDataFetched] = useState({});
  const addNewCard = useCallback(
    async (bodyData) => {
      if (!bodyData.title || !bodyData.description) {
        console.error("Title and description are required");
        return;
      }
      try {
        const resumeCollectionRef = collection(db, "users", userId, "resumes");
        const newCardRef = await addDoc(resumeCollectionRef, bodyData);
        setCards((prevCards) => [
          ...prevCards,
          { id: newCardRef.id, ...bodyData },
        ]);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
    [userId]
  );

  const showCollectionResume = useCallback(async () => {
    if (!userId) {
      setCards([]);
      setCollections([]);
      return;
    }
    try {
      const resumeCollectionRef = collection(db, "users", userId, "resumes");
      const showCollection = await getDocs(resumeCollectionRef);
      setCollections(showCollection.docs.map((doc) => doc.data()));
      setCards(
        showCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  }, [userId]);

  const fetchData = useCallback(async (userId, ResumeId) => {
    const userInfoRef = collection(
      doc(db, "users", userId, "resumes", ResumeId),
      "userInfo"
    );

    const snapshot = await getDocs(userInfoRef);
    const allData = {};

    snapshot.docs.forEach((doc) => {
      const docData = doc.data();
      switch (doc.id) {
        case "PersonalInfo":
          allData.personalInfo = docData;
          break;
        case "Experiences":
          allData.experiences = docData.Experiences || [];
          break;
        case "Skills":
          allData.skills = docData.Skills || [];
          break;
        case "education":
          allData.education = docData;
          break;
        default:
          break;
      }
    });

    setResumeDataFetched(allData);
  });

  useEffect(() => {
    showCollectionResume();
  }, [userId, showCollectionResume]);

  return {
    addNewCard,
    cards,
    collections,
    fetchData,
    resumeDataFetched,
    setResumeDataFetched,
  };
}
