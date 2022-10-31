import React from 'react';
import Header from './Header';
import Body from './Body';

function Table() {
  return (
    <div className="div-table">
      <table>
        <Header />
        <Body />
      </table>
    </div>
  );
}

export default Table;
