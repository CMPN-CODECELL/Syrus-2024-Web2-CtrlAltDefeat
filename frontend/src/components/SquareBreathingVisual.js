// 
import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import breathbg from '../assets/breathbg.jpg'  

const SquareBreathingVisual = ({ videoLink ,videoLink2, videoLink3}) => {
  const [player, setPlayer] = useState(null);

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const onEnded = () => {
    player.seekTo(0);
  };

  const divStyle = {
    backgroundImage: `url(${breathbg})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={divStyle} className="container w-full h-full mx-auto py-8 px-4 flex flex-col items-center justify-center bg-gray-300">
      {/* <h1 className="text-3xl font-bold text-gray-800 mb-8">Breathing Exercises</h1> */}
      
      {/* Video 1: Square Breathing */}
      <div className="w-full md:w-1/2 mb-8">
        <ReactPlayer
          url={videoLink}
          controls
          onEnded={onEnded}
          onReady={onReady}
          className="w-full aspect-w-16 aspect-h-9"
        />
      </div>

      {/* Square Breathing Exercise Card */}
      <div className="bg-gradient-to-r from-white to-gray-300 rounded-lg shadow-md p-6 mb-8 w-full md:w-full">
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

      {/* Video 2: 4-7-8 Breathing */}
      <div className="w-full md:w-1/2 mb-8">
        <ReactPlayer
          url={videoLink2}
          controls
          onEnded={onEnded}
          onReady={onReady}
          className="w-full aspect-w-16 aspect-h-9"
        />
      </div>

      {/* 4-7-8 Breathing Exercise Card */}
      <div className="bg-gradient-to-r from-white to-gray-300 rounded-lg shadow-md p-6 mb-8 w-full md:w-full">
        <h2 className="text-xl font-bold mb-4">4-7-8 Breathing</h2>
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Benefits of 4-7-8 Breathing:</h3>
          <ul className="list-disc pl-6">
            <li className="text-gray-700">Makes it easier to fall asleep and have a more restful night.</li>
            <li className="text-gray-700">Helps you concentrate better and think more clearly.</li>
            <li className="text-gray-700">Helps you manage your feelings and stay calm in tough situations.</li>
            <li className="text-gray-700">Helps you feel more relaxed by calming your body and mind.</li>
          </ul>
        </div>    
      </div>

      {/* Video 3: Mini Meditation */}
      <div className="w-full md:w-1/2 mb-8">
        <ReactPlayer
          url={videoLink3}
          controls
          onEnded={onEnded}
          onReady={onReady}
          className="w-full aspect-w-16 aspect-h-9"
        />
      </div>

      {/* Mini Meditation Exercise Card */}
      <div className="bg-gradient-to-r from-white to-gray-300 rounded-lg shadow-md p-6 mb-8 w-full md:w-full">
        <h2 className="text-xl font-bold mb-4">Mini Meditation</h2>
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Benefits of Mini Meditation:</h3>
          <ul className="list-disc pl-6">
            <li className="text-gray-700">Mini-meditation can help you control your feelings by giving you a moment to think before reacting to things.</li>
            <li className="text-gray-700">It makes you better at handling problems and challenges without getting too stressed out.</li>
            <li className="text-gray-700"> It makes you more aware of your thoughts, feelings, and what's happening around you.</li>
            <li className="text-gray-700">It makes it easier to concentrate on things because it clears your mind and helps you pay attention better.</li>
          </ul>
        </div>    
      </div>
    </div>
  );
};

export default SquareBreathingVisual;