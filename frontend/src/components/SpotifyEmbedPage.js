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
          uri: 'spotify:playlist:4xGfRyzjc86vW4ZPtu8Xa7?si=tHtKCYOMRh-Gh3FT' // Replace with your playlist ID
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
    <div className='spotify-page-container'>
      <div className="playlist">
        <button className="playlist-item" data-spotify-uri="spotify:track:0tDKeYimIKdStb2dEZhpnK?si=BLZyK7WfS16YfeXL0JVacA">
          Track 1
        </button>
        <button className="playlist-item" data-spotify-uri="spotify:track:5uqRDH8XTRz91x8HhhRHpo?si=bpPkqM3yTXym3THDUHetYA">
          Track 2
        </button>
     
      </div>

      <div id="embed-iframe"></div>
    </div>
  );
};

export default SpotifyEmbedPage;