import { puppyList } from './data.js'
import { useState } from 'react'
import './App.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  return (
    <div className="App">
      <h1>Puppy Pals</h1>
      <div className="puppy-list">
        {puppies.map((puppy) => (
          <p
            onClick={() => setFeatPupId(puppy.id)}
            key={puppy.id}
            className={featPupId === puppy.id ? 'active' : ''}
          >
            {puppy.name}
          </p>
        ))}
      </div>

      {featuredPup && (
        <div className="featured-puppy">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;