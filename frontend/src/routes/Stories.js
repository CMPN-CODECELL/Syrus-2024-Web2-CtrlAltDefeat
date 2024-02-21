import React from 'react';
import { Link } from 'react-router-dom';
import resultsbg from '../assets/resultsbg.jpg';

const StoriesComponent = () => {

  const divStyle = {
    backgroundImage: `url(${resultsbg})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const VideoBackground = () => {
    return (
      <div style={divStyle} className="min-h-screen w-full flex">       
        <div className="w-full">
          <nav className="flex items-center justify-between w-full h-24 border-b-4 border-yellow-300">
            <div className="text-yellow-400">
              <Link to="/"><h1 className="text-2xl md:text-5xl font-bold px-4 font-protest-revolution">Mindfit</h1></Link>
              <p className="text-sm md:text-md font-semi-bold px-4 ">Nurturing Minds, Fostering Wellness</p>
            </div>
            <div className="space-x-4 px-4 text-yellow-400">
              <Link to="/aboutus" className="">           
                <button className=" hover:bg-gray-300  hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">About Us</button>
              </Link>
              <Link to="/results">
              <button className=" hover:bg-gray-300  hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Results</button>
              </Link>
              <Link to="/breathing">
              <button className=" hover:bg-gray-300  hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Exercises</button>
              </Link >
              <Link to="/learn">
              <button className=" hover:bg-gray-300  hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Learn</button>
              </Link>
              <Link to="/contactus">
                <button className=" hover:bg-gray-300 hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Contact Us</button>
              </Link> 
              <Link to="/login">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-yellow-600">Join Us</button>    
              </Link>
            </div>
          </nav> 
           (
        <div className="container mx-auto py-8 px-4">
            {/* <h1 className="text-3xl font-bold text-gray-800 mb-8">User Feedback: Insights and Recommendations</h1> */}

            {/* Feedback from Sarah */}
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Feedback from Sarah</h2>
                <p className="text-gray-700">"I found the anxiety assessment very insightful. It helped me recognize patterns in my worrying behavior and motivated me to seek help. The recommendations provided practical strategies that I could incorporate into my daily routine."</p>
            </div>

            {/* Feedback from John */}
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Feedback from John</h2>
                <p className="text-gray-700">"The stress management section shed light on how my high stress levels were impacting my overall well-being. The recommended actions were simple yet effective, and I've noticed a significant improvement in managing stress since implementing them."</p>
            </div>

            {/* Feedback from Emily */}
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Feedback from Emily</h2>
                <p className="text-gray-700">"The sleep quality assessment confirmed what I suspected – my sleep patterns were erratic. The resources suggested were helpful, especially the tips for creating a relaxing bedtime routine. I'm already sleeping better and waking up more refreshed."</p>
            </div>

            {/* Feedback from David */}
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Feedback from David</h2>
                <p className="text-gray-700">"I appreciated the option to explore therapy and counseling services. The website provided useful information on different therapy modalities and how to find a therapist. It's reassuring to know that support is available, especially during challenging times."</p>
            </div>

            {/* Feedback from Maria */}
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Feedback from Maria</h2>
                <p className="text-gray-700">"The community forums have been a lifeline for me. It's comforting to connect with others who understand what I'm going through. The encouragement and shared experiences help me feel less alone on my mental health journey."</p>
            </div>

            {/* Feedback from Mark */}
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Feedback from Mark</h2>
                <p className="text-gray-700">"The self-care practices section was a gentle reminder to prioritize my well-being. I appreciated the practical tips and resources for incorporating self-care into my daily life. It's empowering to take proactive steps towards better mental health."</p>
            </div>

            {/* Feedback from Jessica */}
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Feedback from Jessica</h2>
                <p className="text-gray-700">"Knowing that emergency help is readily accessible is reassuring. The list of hotlines and crisis resources provides peace of mind, especially during moments of distress. It's comforting to have support available when I need it most."</p>
            </div>
        </div>
    );


        
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-200 h-screen w-full overflow-auto">
      <VideoBackground />
      

      <div className="container mx-auto flex w-full bg-gray-800 justify-center items-center">
        <footer className="flex text-center mt-1 h-28 text-white text-sm">
        <div className="container mx-auto flex flex-col items-center">
                <p className="text-lg mb-4">Contact Us:mindfitcc@gmail.com</p>
                <div className="flex space-x-4">
                    
                </div>
                <p className="mt-4 text-sm">© 2024 MindFit. All rights reserved.</p>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default StoriesComponent;