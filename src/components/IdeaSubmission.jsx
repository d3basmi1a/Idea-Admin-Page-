// IdeaSubmission.jsx
import React, { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfiguration";
import "./styles.css";

function IdeaSubmission() {
  async function handle() {
    const userName = "ankit03";
    const currentUserEmail = "meraMan@gmail.com";
    const teamName = "ghatityaInsaan";
    const categoryChecked = "WEB DEV";
    const ideaDescription = "Will tell later";
    const contactNumber = 45789482399;
    const department = "CSE";
    const year = 2022;
    const college = "tmsl";

    try {
      const userCollectionRef = collection(
        db,
        `Ideas/${userName.trim()} - ${currentUserEmail}/IdeaDetais`
      );

      const docRef = await addDoc(userCollectionRef, {
        userName,
        currentUserEmail,
        teamName,
        categoryChecked,
        ideaDescription,
        contactNumber,
        department,
        year,
        college,
        fileTitle: null,
      });

      const userRef = collection(db, "users");
      await addDoc(userRef, {
        userName: userName,
        userEmail: currentUserEmail,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  useEffect(() => {
    handle();
  }, []);

  return (
    <div className="idea-submission">
      <h1>Idea Submission</h1>
    </div>
  );
}

export default IdeaSubmission;