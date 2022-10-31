import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function FilterInputByName() {
  const { filterByName, setFilterByName } = useContext(GlobalContext);
  return (
    <div>
      <h1 className="title">Planets Finder</h1>
      <input
        className="input-search-name"
        data-testid="name-filter"
        type="text"
        placeholder="Filtrar por nome"
        value={ filterByName }
        onChange={ (event) => setFilterByName(event.target.value) }
      />
    </div>
  );
}

export default FilterInputByName;
