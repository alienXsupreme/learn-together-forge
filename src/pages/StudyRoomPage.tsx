
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StudyRoom from '../components/StudyRoom';

const StudyRoomPage = () => {
  // Get room id from URL params
  const { id } = useParams<{ id: string }>();
  
  // In a real app, we would fetch room data from API using the id
  // For now, we'll use mock data
  const roomName = "Physics 101 Study Group";

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1">
        <StudyRoom roomId={id || ''} roomName={roomName} />
      </main>
    </div>
  );
};

export default StudyRoomPage;
