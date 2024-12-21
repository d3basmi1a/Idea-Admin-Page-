import React, { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../firebase/firebaseConfiguration";

function IdeaSubmission() {
  async function handle() {
    
    // hard coding the values for fields for the idea submussion 
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
      // Collection reference
      const userCollectionRef = collection(
        db,
        `Ideas/${userName.trim()} - ${currentUserEmail}/IdeaDetais`
      );

      // Add document to Firestore
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

      // Add document to Firestore
      const useRef = await addDoc(userRef, {
        userName: userName, // Field for username
        userEmail: currentUserEmail, // Field for user email
      });

      console.log("Document written with ID: ", docRef.id,useRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  useEffect(() => {
    handle(); // Call the handle function
  }, []);

  return (
    <div>
      <h1>Idea Submission</h1>
    </div>
  );
}

export default IdeaSubmission;
