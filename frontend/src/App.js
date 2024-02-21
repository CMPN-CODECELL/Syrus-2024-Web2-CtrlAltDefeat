import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './routes/Login';
import HomeComponent from './routes/Home';
import SignupComponent from './routes/Signup';
import DashboardComponent from './routes/Dashboard';
import ContactUsComponent from './routes/ContactUs';
import SquareBreathingVisual from './components/SquareBreathingVisual';
import AboutUsComponent from './routes/AboutUs';
import StoriesComponent from './routes/Stories';
import ExerciseComponent from './routes/Exercises';
import LearnComponent from './routes/Learn';
import ZenModeComponent from './routes/Zenmode';
import SpotifyEmbedPage from './components/SpotifyEmbedPage';
import ThoughtJournal from './components/ThoughtJournal'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/login" element={<LoginComponent/>} />
        <Route path="/signup" element={<SignupComponent/>} />
        <Route path="/dashboard" element={<DashboardComponent/>} />
        <Route path="/contactus" element={<ContactUsComponent/>} />
        <Route path="/breathing" element={<SquareBreathingVisual videoLink="https://youtu.be/bF_1ZiFta-E?si=qKMB9TmjwGWipdjB" videoLink2="https://youtu.be/kpSkoXRrZnE?si=jvj7klc8hEvwnW0c" videoLink3="https://youtu.be/cEqZthCaMpo?si=s2WO6W9zLjUfWbEm route"/>} />
        <Route path="/aboutus" element={<AboutUsComponent/>} />
        <Route path="/stories" element={<StoriesComponent/>} />
        <Route path="/exercise" element={<ExerciseComponent/>} />
        <Route path="/learn" element={<LearnComponent />} />
        <Route path="/zenmode" element={<ZenModeComponent/>} />
        <Route path="/music" element={<SpotifyEmbedPage/>} />
        <Route path="/thoughts" element={<ThoughtJournal/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
