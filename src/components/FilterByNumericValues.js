import React, { useState, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function FilterByNumericValues() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(GlobalContext);

  const [filteringColumn, setFilteringColumn] = useState('population');
  const [filteringComparison, setFilteringComparison] = useState('maior que');
  const [filteringValue, setFilteringValue] = useState(0);

  const [descriptionOptions, setDescriptionOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  function handleDataFilter() {
    const currentFilter = {
      column: filteringColumn,
      comparison: filteringComparison,
      value: filteringValue,
    };
    setFilterByNumericValues([...filterByNumericValues, currentFilter]);
    setDescriptionOptions(descriptionOptions.filter((description) => (
      filteringColumn !== description
    )));
  }

  return (
    <div>
      <select
        className="input-search-name"
        data-testid="column-filter"
        value={ filteringColumn }
        onChange={ ({ target }) => setFilteringColumn(target.value) }
      >
        {
          descriptionOptions.map((element) => (
            <option key={ element } value={ element }>
              { element }
            </option>
          ))
        }
      </select>
      <select
        className="input-search-name"
        data-testid="comparison-filter"
        value={ filteringComparison }
        onChange={ ({ target }) => setFilteringComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        className="input-search-name"
        data-testid="value-filter"
        type="number"
        value={ filteringValue }
        onChange={ ({ target }) => setFilteringValue(target.value) }
      />
      <button
        className="filter-button"
        data-testid="button-filter"
        type="button"
        onClick={ handleDataFilter }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumericValues;
