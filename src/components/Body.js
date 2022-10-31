import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function Body() {
  const { planets, filterByNumericValues, filterByName } = useContext(GlobalContext);
  const filterSearch = (api, searchByName) => {
    if (!api) return [];
    if (searchByName) {
      return api.filter((element) => element.name.includes(searchByName));
    }
    return api;
  };

  const results = filterSearch(planets, filterByName);
  return (
    <tbody>
      {
        results.filter((item) => (
          filterByNumericValues.length === 0 ? true
            : filterByNumericValues.every((element) => {
              let returnEvery = true;
              if (element.comparison === 'maior que') {
                returnEvery = Number(item[element.column]) > Number(element.value);
              }
              if (element.comparison === 'igual a') {
                returnEvery = Number(item[element.column]) === Number(element.value);
              }
              if (element.comparison === 'menor que') {
                returnEvery = Number(item[element.column]) < Number(element.value);
              }
              return returnEvery;
            })))
          .map((data) => (
            <tr key={ data.name }>
              <td className="body-info">{ data.name }</td>
              <td>{ data.rotation_period }</td>
              <td>{ data.orbital_period }</td>
              <td>{ data.diameter }</td>
              <td>{ data.climate }</td>
              <td>{ data.gravity }</td>
              <td>{ data.terrain }</td>
              <td>{ data.surface_water }</td>
              <td>{ data.population }</td>
              <td>{ data.created }</td>
              <td>{ data.edited }</td>
            </tr>
          ))
      }
    </tbody>
  );
}

export default Body;
