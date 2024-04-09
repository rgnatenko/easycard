
import React from 'react';
import { ButtonWithIcon } from '../../ui/ButtonWithIcon';
import { Link } from 'react-router-dom';

export const ConnectLocation: React.FC = () => (
  <div className="connect-board" >
    <div className="connect-board__head">
      <img src="location.png" alt="" />

      <h4>Connect your location</h4>
      <p className="text-body">
        To use the team feature please connect your location
      </p>
    </div>

    <Link to="./connect-location">
      <ButtonWithIcon iconClass="location">
        Connect Location
      </ButtonWithIcon>
    </Link>
  </div>

);
