import React from 'react';
import { Link } from 'react-router-dom';
import aboutusbg from '../assets/aboutusbg.png';

const ExerciseComponent = () => {

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
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-200 h-screen w-full overflow-auto">
      <VideoBackground />
      
      
      <div className="container mx-auto flex w-full bg-gray-800 justify-center items-center">
        <footer className="flex text-center mt-1 h-28 text-white text-sm">
          <p className="flex h-4/5 w-full"></p>
          <p className="flex h-1/5 w-full">Contact Us: mindfitcc@gmail.com</p>
        </footer>
      </div>
    </div>
  );
};

export default ExerciseComponent;