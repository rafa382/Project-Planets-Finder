import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import Table from './Table';
import FilterInputByName from './FilterInputByName';
import FilterByNumericValues from './FilterByNumericValues';

function Pages() {
  const { loading } = useContext(GlobalContext);
  return (
    <div>
      <div className="side-filter">
        <FilterInputByName />
        <FilterByNumericValues />
      </div>
      <div className="div-body">
        {!loading && <Table />}
      </div>
    </div>
  );
}

export default Pages;
