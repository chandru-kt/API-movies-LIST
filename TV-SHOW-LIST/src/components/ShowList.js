import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const ShowList = ({ onShowClick }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
<div className="bg-dark py-5">
<div className="container">
  <h1 className="my-4 text-light">TV Shows</h1>
  <div className="row">
    {shows.map(show => (
      <div key={show.show.id} className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title" onClick={() => onShowClick(show.show)}>{show.show.name}</h2>
            <p className="card-text">{show.show.summary.replace(/<[^>]*>?/gm, '')}</p>
            <button className="btn btn-primary" onClick={() => onShowClick(show.show)}>Show Summary</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

</div>

  );
};

export default ShowList;
