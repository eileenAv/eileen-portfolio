import React, { useState } from 'react';
import './homepage.css';  // Assuming you are using regular CSS for styling

function Homepage() {
  const [items, setItems] = useState(['Cats', 'Drawing', 'Sleeping']);

  // Function to shuffle array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffle items when button is clicked
  const handleShuffle = () => {
    setItems(shuffleArray(items));
  };
  

  return (
    <div className="container">
      <div className="content">
        <img src="/profilePicture.jpg" className="profileImage" alt="Profile" />
        
        <h2 className="text1">Hi! Welcome to my page!</h2>
        <p className="text">
          My name is Eileen and I am a senior at UW Bothell. I love cats and I have a cat named Caramel.
        </p>
        <p className="text">A list of my favorite things:</p>
        
        <ul className="text">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Shuffle Button */}
        <button className="shuffle-button" onClick={handleShuffle}>
          Shuffle List
        </button>
      </div>
    </div>
  );
}

export default Homepage;
