
import React from 'react';

interface Participant {
  id: string;
  name: string;
  isMuted: boolean;
  isVideoOn: boolean;
  isScreenSharing: boolean;
}

interface VideoGridProps {
  participants: Participant[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ participants }) => {
  // Helper function to determine grid columns based on participant count
  const getGridCols = (count: number) => {
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count <= 4) return 'grid-cols-2';
    if (count <= 6) return 'grid-cols-3';
    return 'grid-cols-4';
  };

  return (
    <div className={`grid ${getGridCols(participants.length)} gap-4 w-full`}>
      {participants.map((participant) => (
        <div 
          key={participant.id}
          className="bg-gray-800 rounded-lg overflow-hidden relative aspect-video"
        >
          {participant.isVideoOn ? (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              {/* This would be a video element in a real implementation */}
              <span className="text-white text-opacity-80">Video Feed</span>
            </div>
          ) : (
            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-study-primary flex items-center justify-center">
                <span className="text-white text-xl font-medium">
                  {participant.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          )}
          
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
            <span className="text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
              {participant.name}
            </span>
            <div className="flex space-x-1">
              {participant.isMuted && (
                <div className="bg-red-500 p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
