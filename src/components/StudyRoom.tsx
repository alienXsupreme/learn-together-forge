
import React, { useState } from 'react';
import VideoGrid from './VideoGrid';
import ChatBox from './ChatBox';
import Notes from './Notes';
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

// Mock data for demonstration
const mockParticipants = [
  { id: '1', name: 'You', isMuted: false, isVideoOn: true, isScreenSharing: false },
  { id: '2', name: 'Sarah Lee', isMuted: true, isVideoOn: true, isScreenSharing: false },
  { id: '3', name: 'John Doe', isMuted: false, isVideoOn: false, isScreenSharing: false },
];

const mockMessages = [
  { 
    id: '1', 
    sender: 'Sarah Lee', 
    content: 'Hi everyone! Ready to start the study session?', 
    timestamp: new Date(Date.now() - 60000) 
  },
  { 
    id: '2', 
    sender: 'John Doe', 
    content: 'Yes, I\'ve prepared some notes on chapter 5', 
    timestamp: new Date(Date.now() - 45000) 
  },
];

interface StudyRoomProps {
  roomId: string;
  roomName: string;
}

const StudyRoom: React.FC<StudyRoomProps> = ({ roomId, roomName }) => {
  const [participants, setParticipants] = useState(mockParticipants);
  const [messages, setMessages] = useState(mockMessages);
  const [notes, setNotes] = useState('# Study Session Notes\n\n## Topics to Cover\n- Chapter 5: Quantum Mechanics\n- Practice problems 5.1-5.10\n- Review midterm concepts');
  
  // Toggle audio/video controls
  const toggleMute = () => {
    setParticipants(prev => 
      prev.map(p => p.id === '1' ? { ...p, isMuted: !p.isMuted } : p)
    );
  };

  const toggleVideo = () => {
    setParticipants(prev => 
      prev.map(p => p.id === '1' ? { ...p, isVideoOn: !p.isVideoOn } : p)
    );
  };

  // Send message function
  const handleSendMessage = (content: string) => {
    const newMessage = {
      id: Date.now().toString(),
      sender: 'You',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // Handle notes update
  const handleSaveNotes = (content: string) => {
    setNotes(content);
  };

  const isUserMuted = participants.find(p => p.id === '1')?.isMuted;
  const isUserVideoOn = participants.find(p => p.id === '1')?.isVideoOn;

  return (
    <div className="h-[calc(100vh-4rem)] p-4 flex flex-col">
      <div className="flex justify-between mb-4 items-center">
        <h1 className="text-xl font-bold text-gray-800">{roomName}</h1>
        <div className="flex items-center space-x-3">
          <Button 
            variant={isUserMuted ? "destructive" : "outline"}
            size="sm"
            onClick={toggleMute}
          >
            {isUserMuted ? 'Unmute' : 'Mute'}
          </Button>
          <Button 
            variant={isUserVideoOn ? "outline" : "destructive"}
            size="sm"
            onClick={toggleVideo}
          >
            {isUserVideoOn ? 'Turn off video' : 'Turn on video'}
          </Button>
          <Button variant="outline" size="sm">Share Screen</Button>
          <Button variant="destructive" size="sm">Leave</Button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-4 gap-4">
        <div className="col-span-3 flex flex-col">
          <div className="flex-1">
            <VideoGrid participants={participants} />
          </div>
        </div>
        
        <div className="col-span-1">
          <Tabs defaultValue="chat" className="h-full flex flex-col">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>
            <TabsContent value="chat" className="flex-1 data-[state=active]:flex data-[state=active]:flex-col">
              <ChatBox 
                messages={messages} 
                onSendMessage={handleSendMessage} 
              />
            </TabsContent>
            <TabsContent value="notes" className="flex-1 data-[state=active]:flex data-[state=active]:flex-col">
              <Notes 
                initialContent={notes} 
                onSave={handleSaveNotes} 
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default StudyRoom;
