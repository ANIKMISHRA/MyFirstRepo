// Package
import React from 'react';

// import Component
import Tree from '../Object/index';
import Recursive from '../Recursion/Recursive';

/**
 * @returns node
 */
const PassingData = () => (
  <div>
    <Recursive place={Tree} />
  </div>
);
export default PassingData;
