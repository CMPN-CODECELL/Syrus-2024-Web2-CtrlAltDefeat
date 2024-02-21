import React from 'react';
import { Link } from 'react-router-dom';
import aboutusbg from '../assets/aboutusbg.png';

const AboutUsComponent = () => {

  const divStyle = {
    backgroundImage: `url(${aboutusbg})`, 
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
              <Link to="/stories">
              <button className=" hover:bg-gray-300  hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Results</button>
              </Link>
              <Link to="/breathing">
                <button className=" hover:bg-gray-300  hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Exercises</button>
              </Link>
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
          <div className="">
          <div className="py-12">
          {/* <h1 className="text-3xl font-bold text-yellow-400 mb-8">About Us</h1> */}
            <div className="container mx-auto px-4 text-justify">
                <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Our Commitment</h2>
                        <p className="text-gray-700">At MindFit, we are committed to creating a safe, inclusive, and supportive environment where every student feels valued, heard, and empowered to prioritize their well-being. Together, we can create a vibrant community dedicated to holistic wellness and student success.</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h2>
                        <p className="text-gray-700">Empowering students like you to prioritize your mental and physical health through easy access to curated resources, expert guidance, and a supportive community.</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-700">To create a comprehensive Web 2.0 platform that integrates mental health tools/games, fitness challenges, and community forums with gamification elements. We aim to foster a culture of well-being where students feel empowered to take charge of their health and wellness journey.</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">What We Offer</h2>
                        <ul className="list-disc text-gray-700 ml-6">
                            <li className="mb-2">Mental Health Tools: Engage in mindfulness exercises and relaxation techniques designed to boost mental resilience and well-being.</li>
                            <li className="mb-2">Community Forums: Connect with like-minded individuals, share experiences, and find support in our vibrant community forums. Whether you're seeking advice, motivation, or simply a listening ear, our community is here for you.</li>
                            <li className="mb-2">Guidance: Access personalized guidance, resources, and support to help you navigate your wellness journey effectively.</li> 
                        </ul>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Join Us</h2>
                        <p className="text-gray-700">Join us on this journey towards a healthier, happier you. Together, let's thrive!</p>
                    </div>                                     
                </div>
            </div>
        </div>
        </div>
                   
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

export default AboutUsComponent;