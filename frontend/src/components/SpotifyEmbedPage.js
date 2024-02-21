import React, { useEffect } from 'react';
import './SpotifyEmbedPage.css';

const SpotifyEmbedPage = () => {


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.onSpotifyIframeApiReady = (IFrameAPI) => {
        const element = document.getElementById('embed-iframe');
        const options = {
          uri: '' // Replace with your playlist ID
        };
        const callback = (EmbedController) => {
          document.querySelectorAll('.playlist-item').forEach(
            item => {
              item.addEventListener('click', () => {
                EmbedController.loadUri(item.dataset.spotifyUri);
              });
            });
        };
        IFrameAPI.createController(element, options, callback);
      };
    };

    return () => {

      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className=''>
    <div className='spotify-page-container h-fullpage'>
      <div className="playlist">
        <button className="playlist-item " data-spotify-uri="spotify:track:0tDKeYimIKdStb2dEZhpnK?si=BLZyK7WfS16YfeXL0JVacA">
          Study Vibe
        </button>
        <button className="playlist-item " data-spotify-uri="spotify:track:7q8IueOMOeOvJb55pNu2gD?si=Yor2gry6SM-Jw3q08lIysw ">
          Chill Vibes
        </button>
        <button className="playlist-item " data-spotify-uri="spotify:track:42VsgItocQwOQC3XWZ8JNA?si=7N0rgNU7Qu2TlmVYuqBPfw">
          Workout Tracks
        </button>
      </div>

      <div id="embed-iframe"></div>
    </div>
    </div>
  );
};

export default SpotifyEmbedPage;
