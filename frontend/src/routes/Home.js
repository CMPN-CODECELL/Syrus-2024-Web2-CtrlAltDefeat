import React from 'react';
import { Link } from 'react-router-dom';
import onlinetherapy from '../assets/onlinetherapy.png'
import bgvideo2 from '../assets/bgvideo2.mp4'
import mind from '../assets/mind.png'
import meditation2 from '../assets/meditation2.png'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import book from '../assets/books.png' 

const HomeComponent = () => {

  const VideoBackground = () => {
    return (
      <div className="relative">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src={bgvideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
          <nav className="flex items-center justify-between w-full h-24 border-b-4 border-yellow-300">
            <div className="text-yellow-400">
              <h1 className="text-2xl md:text-5xl font-bold px-4 font-protest-revolution">Mindfit</h1>
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
          
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          <header>
          <div className="h-screen flex flex-col justify-center">
            <div className="text-center text-gray-800 ml-4 mb-4 justify-center">
              <h1 className="text-xl md:text-3xl text-yellow-400 mb-4">“You don’t have to be positive all the time. It’s perfectly okay to feel sad, angry, annoyed, frustrated, scared and anxious. Having feelings doesn’t make you a negative person. It makes you human.” </h1>
              <p className="text-base md:text-lg text-white">— Lori Deschene</p> 
            </div>
          </div>
          </header>    
          <div className="text-center w-1/3 ">
          </div>     
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-200 h-screen w-full overflow-auto">
      <VideoBackground />
      <section className="w-full h-auto p-4 text-justify">
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg p-4 mb-8 sm:p-6 shadow-md w-full flex flex-row">
              <img src={meditation2} alt="Online-therapy-pic" className="h-64 w-64"/>
              <div className="text-xl p-2">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">Meditation</h2>
                <p className="text-xl md:text-base text-gray-700">Mindfulness Meditation, a powerful practice rooted in ancient traditions, offers profound benefits for mental health and overall well-being. By cultivating present-moment awareness and non-judgmental acceptance of thoughts, emotions, and sensations, mindfulness meditation helps individuals develop resilience to stress, anxiety, and depression. Through regular practice, participants learn to observe their inner experiences with curiosity and compassion, fostering a deeper connection to themselves and the world around them. Mindfulness meditation techniques, such as focused breathing, body scan, and loving-kindness meditation, provide practical tools for managing daily challenges and enhancing emotional regulation. Research indicates that mindfulness meditation can reduce symptoms of psychological distress, improve mood, and enhance overall quality of life.</p>
                {/* <a href="https://www.manastha.com/free-online-counselling-and-therapy/" className="text-gray-800 font-semibold mt-2 block">Free Online Therapy and Counselling</a> */}
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg p-4 mb-8 sm:p-6 shadow-md w-full flex flex-row">
              <img src={pic1} alt="Online-therapy-pic" className="h-64 w-64"/>
              <div className="text-xl p-2">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">Wellness Articles</h2>
                <p className="text-xl md:text-base text-gray-700">Wellness articles serve as invaluable resources for individuals seeking to cultivate holistic well-being and nurture their mental health. Covering a diverse array of topics such as stress management, nutrition, fitness, mindfulness, and self-care practices, these articles offer practical insights, evidence-based strategies, and expert guidance to empower readers on their wellness journey. From exploring the profound impact of nutrition on mood and cognitive function to delving into the transformative power of exercise in reducing anxiety and depression, wellness articles provide a wealth of knowledge and inspiration for fostering positive lifestyle changes and cultivating resilience in the face of life's challenges. By promoting awareness, fostering self-compassion, and encouraging mindful living, wellness articles inspire individuals to prioritize their mental health and embrace holistic approaches to well-being, ultimately empowering them to lead fulfilling and purpose-driven lives.</p>
                {/* <a href="https://mindfulnessexercises.com/free-online-mindfulness-courses/" className="text-gray-800 font-semibold mt-2 block">Free Online Therapy and Counselling</a> */}
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg p-4 mb-8 sm:p-6 shadow-md w-full flex flex-row">
              <img src={pic2} alt="Online-therapy-pic" className="h-64 w-64"/>
              <div className="text-xl p-2">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">Community Forums</h2>
                <p className="text-xl md:text-base text-gray-700">Community forums provide invaluable spaces for individuals to connect, share experiences, and find support on their mental health journeys. These forums offer a platform where members can engage in open and honest dialogue, discussing a wide range of topics related to mental illness, emotional well-being, and personal growth. From offering words of encouragement and validation to providing practical advice and coping strategies, community forums foster a sense of belonging and solidarity among participants. Whether seeking guidance on managing symptoms, navigating treatment options, or simply finding comfort in knowing that they are not alone, individuals benefit from the diverse perspectives and collective wisdom shared within these supportive communities. By promoting empathy, understanding, and mutual respect, community forums serve as invaluable resources for fostering connection and hope.</p>
                {/* <a href="https://mindfulnessexercises.com/free-online-mindfulness-courses/" className="text-gray-800 font-semibold mt-2 block">Free Online Therapy and Counselling</a> */}
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg p-4 mb-8 sm:p-6 shadow-md w-full flex flex-row">
              <img src={mind} alt="Online-therapy-pic" className="h-64 w-64"/>
              <div className="text-xl p-2">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">Mindfulness Courses</h2>
                <p className="text-xl md:text-base text-gray-700">Mindfulness courses, designed to cultivate awareness and promote emotional well-being, offer invaluable resources for individuals seeking to enhance their mental health and resilience. Rooted in centuries-old practices, these courses provide practical techniques and teachings aimed at fostering present-moment attention and non-judgmental awareness. Participants learn to observe thoughts and sensations with curiosity and compassion, developing skills for managing stress, anxiety, and depression. Mindfulness courses often cover a range of topics, including guided meditation practices, mindful breathing exercises, body scan techniques, and strategies for integrating mindfulness into daily life. By engaging in structured coursework and guided sessions, individuals gain insight into the interconnectedness of mind, body, and emotions, empowering them to cultivate greater balance, clarity, and inner peace.</p>
                <a href="https://mindfulnessexercises.com/free-online-mindfulness-courses/" className="text-gray-800 font-semibold mt-2 block">Discover Mindfulness Courses</a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg p-4 mb-8 sm:p-6 shadow-md w-full flex flex-row">
              <img src={book} alt="Online-therapy-pic" className="h-64 w-64"/>
              <div className="text-xl p-2">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">Mental Health Resources</h2>
                <p className="text-xl md:text-base text-gray-700">Mental health resources serve as vital lifelines for individuals navigating the complexities of mental illness and emotional well-being. These resources encompass a diverse array of support systems, including helplines, crisis intervention services, online communities, and educational materials tailored to various mental health conditions. From trusted websites offering comprehensive information on symptoms, treatment options, and self-care strategies to local support groups facilitating peer-to-peer connections and mutual understanding. By embracing a culture of compassion and support, mental health resources strive to dismantle barriers to care, championing the belief that every individual deserves access to resources and support systems that honor their journey toward mental well-being.</p>
                <a href="https://www.mhresources.org/" className="text-gray-800 font-semibold mt-2 block">Explore Mental Health Resources</a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg p-4 mb-8 sm:p-6 shadow-md w-full flex flex-row">
              <img src={onlinetherapy} alt="Online-therapy-pic" className="h-64 w-64"/>
              <div className="text-xl p-2">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">Online Therapy</h2>
                <p className="text-xl md:text-base text-gray-700">Explore online therapy options and connect with licensed therapists for confidential counseling sessions and mental health support. Online therapy, also known as teletherapy or e-counseling, provides a convenient and accessible platform for individuals to receive professional mental health support from the comfort of their own homes. With just an internet connection and a compatible device, individuals can access a range of mental health services, including individual therapy, couples counseling, and group sessions. Online therapy offers flexibility in scheduling, allowing clients to choose appointment times that suit their busy lifestyles. Therapists utilize evidence-based treatment approaches such as cognitive-behavioral therapy (CBT) and mindfulness-based interventions to address a variety of mental health concerns, including anxiety, depression, trauma, and stress-related disorders. The confidentiality and privacy of client information are prioritized, with communication encrypted to ensure security.</p>
                <a href="https://www.manastha.com/free-online-counselling-and-therapy/" className="text-gray-800 font-semibold mt-2 block">Free Online Therapy and Counselling</a>
              </div>
            </div>
        </section>
      <div className="container mx-auto flex w-full bg-gray-800 justify-center items-center">
      <footer className="bg-gray-800 text-gray-300 py-8">
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

export default HomeComponent;

