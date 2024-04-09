import React from 'react';
import { ButtonWithIcon } from '../ButtonWithIcon';

const ChallengeBar: React.FC = () => {
  return (
    <div className="challenge-bar">
      <p className="text-body challenge-bar__text">
        42 Days challenge is a way which can increase your reviews in 300%!
        To start you need to have at least 1 active card.
      </p>

      <ButtonWithIcon  iconClass="flag">
        Start 42 Days Challenge
      </ButtonWithIcon>
    </div>
  );
};

export default ChallengeBar;
