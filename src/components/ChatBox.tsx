
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatMessage {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
}

interface ChatBoxProps {
  messages: ChatMessage[];
  onSendMessage: (content: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full border rounded-lg overflow-hidden">
      <div className="px-4 py-2 bg-gray-100 border-b">
        <h3 className="text-sm font-medium">Chat</h3>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col">
            <div className="flex items-baseline space-x-2">
              <span className="font-medium text-sm">{message.sender}</span>
              <span className="text-xs text-gray-500">
                {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <p className="text-sm mt-1">{message.content}</p>
          </div>
        ))}
        {messages.length === 0 && (
          <div className="h-full flex items-center justify-center text-gray-500 text-sm">
            No messages yet. Start the conversation!
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-2 border-t flex">
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1"
        />
        <Button type="submit" size="sm" className="ml-2">
          Send
        </Button>
      </form>
    </div>
  );
};

export default ChatBox;
