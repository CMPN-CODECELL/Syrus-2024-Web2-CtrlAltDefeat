import React from 'react';
import { Link } from 'react-router-dom';
import Chatbot from '../components/Chatbot';

const DashboardComponent = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
      <div className="container mx-auto">
        <nav className="flex px-4 items-center justify-between w-full h-24 border-b-4 border-yellow-300">
          <div>
          <h1 className="text-2xl md:text-5xl font-bold px-4 font-protest-revolution">Mindfit</h1>
              <p className="text-sm md:text-md font-semi-bold px-4 ">Nurturing Minds, Fostering Wellness</p>
          </div>
          <div className="space-x-4 flex items-center">
            <Link to="/thoughts">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-yellow-600">Thought Journal</button>
            </Link>
            <Link to="/breathing">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-yellow-600">Breathing Exercise</button>
            </Link>
            <Link to="/music">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-yellow-600">Music</button>
            </Link>
            <Link to="/zenmode">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-blue-600">Zen Mode</button>
            </Link>
            {/* Add more buttons here */}
            <Link to="/">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-red-600">Logout</button>
            </Link>
          </div>
        </nav>
        <div className='px-4'>
        <section className="mt-8 space-y-8">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thought Journal</h2>
            {/* Add content related to Thoughts Journal */}
            <p>Your thoughts journal content goes here.A thought journal is a powerful tool for fostering self-awareness and emotional regulation. It provides a safe space to reflect on thoughts and feelings, helping individuals identify patterns, triggers, and recurring themes in their mental landscape. By jotting down thoughts, emotions, and reactions, users can gain insights into their inner workings, challenge negative beliefs, and cultivate a more positive mindset. Thought journaling encourages mindfulness, accountability, and self-discovery, empowering individuals to navigate challenges, manage stress, and foster resilience in their mental health journey.</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-md p-6">
             <h2 className="text-xl font-bold text-gray-800 mb-4">Zen Mode</h2>
              <p className="text-gray-700">Zen mode on our mental health website offers a tranquil sanctuary for users to retreat into a state of serenity and calmness. Designed to soothe the mind and body, Zen mode provides a curated selection of mindfulness exercises, guided meditations, and relaxation techniques tailored to promote inner peace and emotional well-being. Users can immerse themselves in soothing sounds, tranquil imagery, and gentle prompts, allowing them to unwind, release tension, and reconnect with their inner selves. Whether seeking respite from daily stressors or seeking a moment of stillness amidst the chaos, Zen mode serves as a sacred space for cultivating mindfulness, fostering self-care, and nurturing holistic wellness.</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Music</h2>
              <p className="text-gray-700">Welcome to our Music page, where soothing melodies and tranquil rhythms await to accompany your mental well-being journey. Through the Spotify Music API, we curate a selection of serene tracks designed to calm the mind, uplift the spirit, and create moments of peace and relaxation. Immerse yourself in the gentle harmonies and comforting melodies carefully chosen to soothe your soul and inspire moments of mindfulness. Whether you're seeking solace during moments of stress or simply craving a serene backdrop for reflection and meditation, our collection of peaceful music offers a sanctuary for rejuvenation and inner harmony.</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-700">Empowering students like you to prioritize your mental and physical health through easy access to curated resources, expert guidance, and a supportive community.</p>
          </div>
        </section>
        </div>
        <div>
          <Chatbot />
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
