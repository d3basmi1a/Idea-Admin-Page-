
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfiguration";

const DocumentList = () => {
  const [ideas, setIdeas] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ref = collection(db,"Ideas")
        const q = query(ref)

        const querySnap = await getDocs(q)
        console.log(querySnap)

        querySnap.forEach((doc)=>{
          console.log(doc)
        })
      }
      catch (error) {
        console.error("Error fetching ideas:", error);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading ideas...</p>;
  }

  return (
    <div>
      <h2>Idea Details</h2>
      {ideas.length === 0 ? (
        <p>No ideas available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Parent Email</th>
              <th>Idea Document ID</th>
              <th>User Email</th>
              <th>Team Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>College</th>
              <th>Contact</th>
              <th>Department</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {ideas.map((idea) => (
              <tr key={idea.ideaDocId}>
                <td>{idea.parentEmail}</td>
                <td>{idea.ideaDocId}</td>
                <td>{idea.userEmail || "N/A"}</td>
                <td>{idea.teamName || "N/A"}</td>
                <td>{idea.categoryChecked || "N/A"}</td>
                <td>{idea.ideaDescription || "N/A"}</td>
                <td>{idea.college || "N/A"}</td>
                <td>{idea.contactNumber || "N/A"}</td>
                <td>{idea.department || "N/A"}</td>
                <td>{idea.year || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DocumentList;



