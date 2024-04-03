
import React from 'react';
import { ButtonWithIcon } from '../../ui/ButtonWithIcon';
import { Link } from 'react-router-dom';

export const ConnectLocation: React.FC = () => (
  <div className="board">
    <div className="board__head">
      <img src="location.png" alt="" className="board__img" />

      <h4>Connect your location</h4>
      <p className="text-body">
        To use the team feature please connect your location
      </p>
    </div>

    <Link to="./connect-location">
      <ButtonWithIcon iconClass="location" color="$c-accent">
        Connect Location
      </ButtonWithIcon>
    </Link>

  </div>
);
