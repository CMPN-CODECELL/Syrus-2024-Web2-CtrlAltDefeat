import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';  

const SquareBreathingVisual = ({ videoLink ,videoLink2, videoLink3}) => {
  const [player, setPlayer] = useState(null);

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const onEnded = () => {
    player.seekTo(0);
  };

return(
  <div className="container w-full h-full mx-auto py-8 px-4 flex flex-col items-center justify-center bg-gray-300">
  <h1 className="text-3xl font-bold text-gray-800 mb-8">Breathing Exercises</h1>
  
  {/* Video */}
  <div className="text-center w-1/2 h-full items-center justify-center mb-8">
    <ReactPlayer
      url={videoLink}
      controls
      onEnded={onEnded}
      onReady={onReady}
      width="100%"
      height="100%"
    />
  </div>
  
  {/* Square Breathing Exercise Card */}
  <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-md p-6 mb-8 w-1/2">
    <h2 className="text-xl font-bold mb-4">Square Breathing</h2>
    
     
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Benefits of Square Breathing:</h3>
        <ul className="list-disc pl-6">
          <li className="text-gray-700">Reduces stress and anxiety levels</li>
          <li className="text-gray-700">Calms the mind and body</li>
          <li className="text-gray-700">Improves focus and concentration</li>
          <li className="text-gray-700">Enhances overall well-being</li>
        </ul>
      </div>    
  </div>
  <div className="text-center w-1/2 h-full items-center justify-center mb-8">
    <ReactPlayer
      url={videoLink2}
      controls
      onEnded={onEnded}
      onReady={onReady}
      width="100%"
      height="100%"
    />
  </div>
  
  {/* Square Breathing Exercise Card */}
  <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-md p-6 mb-8 w-1/2">
    <h2 className="text-xl font-bold mb-4">4-7-8 Breathing </h2>
    
     
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Benefits of 4-7-8 Breathing:</h3>
        <ul className="list-disc pl-6">
          <li className="text-gray-700">Makes it easier to fall asleep and have a more restful night.</li>
          <li className="text-gray-700">Helps you concentrate better and think more clearly.</li>
          <li className="text-gray-700">Improves focus and concentration</li>
          <li className="text-gray-700">Enhances overall well-being</li>
        </ul>
      </div>    
  </div>
  <div className="text-center w-1/2 h-full items-center justify-center mb-8">
    <ReactPlayer
      url={videoLink3}
      controls
      onEnded={onEnded}
      onReady={onReady}
      width="100%"
      height="100%"
    />
  </div>
  
  {/* Square Breathing Exercise Card */}
  <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-md p-6 mb-8 w-1/2">
    <h2 className="text-xl font-bold mb-4">Square Breathing</h2>
    
     
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Benefits of Square Breathing:</h3>
        <ul className="list-disc pl-6">
          <li className="text-gray-700">Reduces stress and anxiety levels</li>
          <li className="text-gray-700">Calms the mind and body</li>
          <li className="text-gray-700">Improves focus and concentration</li>
          <li className="text-gray-700">Enhances overall well-being</li>
        </ul>
      </div>    
  </div>
</div>
);
};

export d