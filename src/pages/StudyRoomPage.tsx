
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StudyRoom from '../components/StudyRoom';

const StudyRoomPage = () => {
  // Get room id from URL params
  const { id } = useParams<{ id: string }>();
  const [roomInfo, setRoomInfo] = useState({
    roomName: "Loading...",
    courseId: "",
    courseName: ""
  });
  
  useEffect(() => {
    if (!id) return;
    
    // In a real app, we would fetch room data from API using the id
    // For now, we'll parse the mock room ID to get course information
    const parts = id.split('-');
    if (parts.length >= 1) {
      const courseId = parts[0];
      
      // Mock course mapping
      const courseMap: Record<string, string> = {
        // Foundation courses
        "BSMA1001": "Mathematics for Data Science I",
        "BSMA1002": "Statistics for Data Science I",
        "BSCS1001": "Computational Thinking",
        "BSHS1001": "English I",
        "BSMA1003": "Mathematics for Data Science II",
        "BSMA1004": "Statistics for Data Science II",
        "BSCS1002": "Programming in Python",
        "BSHS1002": "English II",
        
        // Diploma in Programming
        "BSCS2001": "Database Management Systems",
        "BSCS2002": "Programming, Data Structures and Algorithms using Python",
        "BSCS2003": "Modern Application Development I",
        "BSCS2003P": "PROJECT Modern Application Development I",
        "BSCS2005": "Programming Concepts using Java",
        "BSCS2006": "Modern Application Development II",
        "BSCS2006P": "PROJECT Modern Application Development II",
        "BSSE2001": "System Commands",
        
        // Diploma in Data Science
        "BSCS2004": "Machine Learning Foundations",
        "BSMS2001": "Business Data Management",
        "BSMS2001P": "PROJECT Business Data Management",
        "BSCS2007": "Machine Learning Techniques",
        "BSCS2008": "Machine Learning Practice",
        "BSCS2008P": "PROJECT Machine Learning Practice",
        "BSMS2002": "Business Analytics",
        "BSSE2002": "Tools in Data Science",
        
        // Degree level courses
        "SE": "Software Engineering",
        "ST": "Software Testing",
        "AI": "AI: Search Methods for Problem Solving",
        "DL": "Deep Learning",
        "SPG": "Strategies for Professional Growth",
        "LLM": "Large Language Models",
        "GenAI": "Generative AI",
        "MLOps": "Machine Learning Operations"
      };
      
      const roomType = parts.length > 1 && parts[1] === "1" ? "Study Group" : 
                       parts.length > 1 && parts[1] === "2" ? "Exam Prep" : "Discussion";
      
      setRoomInfo({
        roomName: `${courseMap[courseId] || courseId} ${roomType}`,
        courseId: courseId,
        courseName: courseMap[courseId] || "Unknown Course"
      });
    } else {
      setRoomInfo({
        roomName: "IITM BS Degree Study Room",
        courseId: "",
        courseName: ""
      });
    }
  }, [id]);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1">
        <StudyRoom 
          roomId={id || ''} 
          roomName={roomInfo.roomName} 
          courseInfo={{
            id: roomInfo.courseId,
            name: roomInfo.courseName
          }}
        />
      </main>
    </div>
  );
};

export default StudyRoomPage;
