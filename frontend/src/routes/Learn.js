import React from 'react';
import { Link } from 'react-router-dom';
import learn from '../assets/learn.jpg';

const LearnComponent = () => {

  const divStyle = {
    backgroundImage: `url(${learn})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const VideoBackground = () => {
    return (
      <div style={divStyle} className="min-h-screen w-full flex">       
        <div className="w-full">
        <div className="container mx-auto py-8 px-4">
            {/* <h1 className="text-3xl font-bold text-yellow-400 mb-8">Learn About Common Mental Health Disorders</h1> */}

            {/* Anxiety Disorders */}
            <div className="mb-8 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Anxiety Disorders</h2>
                <ul className="list-disc pl-6">
                    <li className="text-lg text-gray-600 mb-2">
                        <strong>Generalized Anxiety Disorder (GAD):</strong> Characterized by excessive worry and anxiety about various aspects of life, often without a specific trigger.
                    </li>
                    <li className="text-lg text-gray-600 mb-2">
                        <strong>Social Anxiety Disorder:</strong> Involves intense fear or discomfort in social situations, leading to avoidance behavior.
                    </li>
                    <li className="text-lg text-gray-600 mb-2">
                        <strong>Panic Disorder:</strong> Marked by sudden and recurring panic attacks, accompanied by physical symptoms like rapid heartbeat, sweating, and shortness of breath.
                    </li>
                </ul>
            </div>

            {/* Attention-Deficit/Hyperactivity Disorder (ADHD) */}
            <div className="mb-8 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Attention-Deficit/Hyperactivity Disorder (ADHD)</h2>
                <p className="text-lg text-gray-600 mb-2">
                    ADHD is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity. Individuals with ADHD may struggle with focus, organization, time management, and impulse control, which can impact academic, work, and social functioning.
                </p>
            </div>

            {/* Eating Disorders */}
            <div className="mb-8 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Eating Disorders</h2>
                <ul className="list-disc pl-6">
                    <li className="text-lg text-gray-600 mb-2">
                        <strong>Anorexia Nervosa:</strong> Involves extreme calorie restriction, intense fear of gaining weight, and distorted body image.
                    </li>
                    <li className="text-lg text-gray-600 mb-2">
                        <strong>Bulimia Nervosa:</strong> Characterized by episodes of binge eating followed by compensatory behaviors such as purging, fasting, or excessive exercise.
                    </li>
                    <li className="text-lg text-gray-600 mb-2">
                        <strong>Binge Eating Disorder:</strong> Involves recurrent episodes of uncontrollable eating, often accompanied by feelings of guilt, shame, and distress.
                    </li>
                </ul>
            </div>

            {/* Mood Disorders */}
            <div className="mb-8 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Mood Disorders</h2>
                <p className="text-lg text-gray-600 mb-2">
                    Mood disorders such as Bipolar Disorder and Major Depressive Disorder involve persistent disturbances in mood, leading to significant distress and impairment in daily functioning.
                </p>
            </div>

            {/* Obsessive-Compulsive Disorder (OCD) */}
            <div className="mb-8 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Obsessive-Compulsive Disorder (OCD)</h2>
                <p className="text-lg text-gray-600 mb-2">
                    OCD is characterized by intrusive, unwanted thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) performed in response to these thoughts.
                </p>
            </div>

            {/* Post-Traumatic Stress Disorder (PTSD) */}
            <div className="mb-8 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Post-Traumatic Stress Disorder (PTSD)</h2>
                <p className="text-lg text-gray-600 mb-2">
                    PTSD can develop after experiencing or witnessing a traumatic event, such as physical assault, natural disaster, or military combat.
                </p>
            </div>

            {/* Substance Use Disorders */}
            <div className="mb-8 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Substance Use Disorders</h2>
                <p className="text-lg text-gray-600 mb-2">
                    Substance use disorders involve problematic patterns of substance use, leading to significant impairment or distress.
                </p>
            </div>
        </div>         
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-200 h-screen w-full overflow-auto">
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
              </Link>
              <button className=" hover:bg-gray-300  hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Learn</button>
              <Link to="/contactus">
                <button className=" hover:bg-gray-300 hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Contact Us</button>
              </Link> 
              <Link to="/login">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-yellow-600">Join Us</button>    
              </Link>
            </div>
          </nav>
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

export default LearnComponent;