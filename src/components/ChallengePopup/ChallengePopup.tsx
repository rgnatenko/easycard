import React from 'react';
import ChallengePopupInfo from '../ChallengePopupInfo/ChallengePopupInfo';
import Popup from '../../ui/Popup/Popup';

const ChallengePopup: React.FC = () => {
  return (
    <Popup>
      <ChallengePopupInfo />
    </Popup>
  );
};

export default ChallengePopup;
