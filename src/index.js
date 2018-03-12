import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship
    name="Millennium Falcon"
    speed=4
    hasRockets=true
    colors={["blue"]}
  />,
  document.getElementById('global')
);
