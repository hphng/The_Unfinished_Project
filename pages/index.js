import React from 'react';
import CardContainer from '../components/Card/CardContainer';

function Home() {
  return (
    <div>
      <p className="text-3xl font-bold mb-4">React Card Generator</p>
      <CardContainer/>
      <h2>This is inside index.js</h2>
      <h2>This is the first thing that got loaded</h2>
    </div>
  );
}

export default Home;