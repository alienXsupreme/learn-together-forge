
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface NotesProps {
  initialContent?: string;
  onSave?: (content: string) => void;
}

const Notes: React.FC<NotesProps> = ({ initialContent = '', onSave }) => {
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (onSave) {
      onSave(content);
    }
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col h-full border rounded-lg overflow-hidden">
      <div className="px-4 py-2 bg-gray-100 border-b flex justify-between items-center">
        <h3 className="text-sm font-medium">Session Notes</h3>
        <div>
          {isEditing ? (
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setIsEditing(false);
                  setContent(initialContent);
                }}
              >
                Cancel
              </Button>
              <Button size="sm" onClick={handleSave}>Save</Button>
            </div>
          ) : (
            <Button size="sm" onClick={() => setIsEditing(true)}>Edit</Button>
          )}
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        {isEditing ? (
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-full min-h-[200px]"
            placeholder="Add your study notes here..."
          />
        ) : (
          <div className="prose max-w-none">
            {content ? (
              <div className="whitespace-pre-wrap">{content}</div>
            ) : (
              <p className="text-gray-500 italic">No notes yet. Click edit to add some!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
