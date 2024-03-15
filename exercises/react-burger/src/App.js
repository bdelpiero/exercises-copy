import React from 'react';
import './App.css';
import { RecipeCard } from './components/RecipeCard';

function App() {
  return (
    <div className="App">
      <header>React Burgers</header>
      <main>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </main>
    </div>
  );
}

export default App;
