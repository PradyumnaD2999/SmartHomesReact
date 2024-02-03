import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const fetchSuggestions = async (value) => {
    try {
      const response = await axios.get(`http://localhost:8081/search/${value}`);
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSuggestionsFetchRequested = ({ value }) => {
    fetchSuggestions(value);
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = (_, { newValue }) => {
    setSearchQuery(newValue);
  };

  const handleSuggestionSelected = (_, { suggestion }) => {
    setSearchQuery(suggestion);
    
    handleSearch();
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/search/${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getSuggestionValue = suggestion => suggestion;

  const renderSuggestion = suggestion => {
    var url = "";
    if(suggestion.ProductType === 'dbl') {
      url = `/doorbells/type/${suggestion.productName}`
    } else if(suggestion.ProductType === 'dlk') {
      url = `/doorlocks/type/${suggestion.productName}`
    } else if(suggestion.ProductType === 'spkr') {
      url = `/speakers/type/${suggestion.productName}`
    } else if(suggestion.ProductType === 'lght') {
      url = `/lightings/type/${suggestion.productName}`
    } else if(suggestion.ProductType === 'trmst') {
      url = `/thermostats/type/${suggestion.productName}`
    }

    return(
      <Link to={url} style={{color: "#f4f807"}}>
        {suggestion.productName}
      </Link>
    );
  };

  useEffect(() => {
    fetchSuggestions(searchQuery);
  }, [searchQuery]);

  return (
    <div style={{float: "right", "padding-right": "30px", "padding-left": "10px"}}>
      <h4 style={{color: "#f4f807"}}>Search Products:</h4>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={handleSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: 'Enter Product Name',
          value: searchQuery || '',
          onChange: handleChange,
        }}
        onSuggestionSelected={handleSuggestionSelected}
      />

      {/* <ul>
        {searchResults.map(product => (
          <li id="search" key={product.id} onClick={() => setSearchQuery(product.name)}>
            {product.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Search;
