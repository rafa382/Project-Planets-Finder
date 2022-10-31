import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [planets, setPlanets] = useState(null);

  const [filterByName, setFilterByName] = useState('');

  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

    fetch(url).then((response) => response.json())
      .then(({ results }) => {
        setPlanets(results);
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={ {
        loading,
        planets,
        filterByName,
        setFilterByName,
        filterByNumericValues,
        setFilterByNumericValues,
      } }
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
