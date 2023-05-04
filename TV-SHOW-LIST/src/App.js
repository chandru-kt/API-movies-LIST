import React, { useState } from 'react';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';

const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  return (
    <div>
      {selectedShow ? (
        <ShowSummary show={selectedShow} />
      ) : (
        <ShowList onShowClick={handleShowClick} />
      )}
    </div>
  );
};

export default App;

