// Package
import React from 'react';

/**
 * @param {object} props
 * @returns node
 */
const Recursive = (props) => {
  // destructuring with validation
  const { place = '' } = props || {};

  // Jsx
  return (
    <ul>
      { place.map((obj) => (
        <div key={obj.id}>
          <li>{obj.label}</li>
          <Recursive place={obj.branches} />
        </div>
      ))}
    </ul>
  );
};
export default Recursive;
