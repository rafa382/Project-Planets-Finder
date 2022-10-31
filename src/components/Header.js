import React from 'react';

function Header() {
  return (
    <thead className="thead">
      <tr className="header">
        <th className="th-header">Name</th>
        <th className="th-header">Rotation Period</th>
        <th className="th-header">Orbital Period</th>
        <th className="th-header">Diameter</th>
        <th className="th-header">Climate</th>
        <th className="th-header">Gravity</th>
        <th className="th-header">Terrain</th>
        <th className="th-header">Surface Water</th>
        <th className="th-header">Population</th>
        <th className="th-header">Created</th>
        <th className="th-header">Edited</th>
      </tr>
    </thead>
  );
}

export default Header;
