import React, { useEffect, useState } from "react";
import "./styles/App.css";
import CharacterList from "./components/CharacterList";
import Portfolio from "./components/Portfolio"; 

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  // Fetch data from the Rick and Morty API
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(err => console.error(err));
  }, []);

  // Handle search functionality
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle sorting functionality
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Filter and sort characters based on user input
  const filteredCharacters = characters
    .filter((char) =>
      char.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (speciesFilter ? char.species === speciesFilter : true) &&
      (genderFilter ? char.gender === genderFilter : true)
    )
    .sort((a, b) => {
      return sortOrder === "ascending" ? a.id - b.id : b.id - a.id;
    });

  return (
    <div className="App">
      <h1>Rick and Morty Character Browser</h1>

      {/* Search, Sort, and Filter Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />

        <select onChange={handleSortOrderChange} value={sortOrder}>
          <option value="ascending">Sort by ID (Ascending)</option>
          <option value="descending">Sort by ID (Descending)</option>
        </select>

        <div className="filters">
          <select onChange={(e) => setSpeciesFilter(e.target.value)}>
            <option value="">All Species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
          </select>

          <select onChange={(e) => setGenderFilter(e.target.value)}>
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      {/* Character List */}
      <CharacterList characters={filteredCharacters} />

      {/* Portfolio Section */}
      <Portfolio />
    </div>
  );
}

export default App;
