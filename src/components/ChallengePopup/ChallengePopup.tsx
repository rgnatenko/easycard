import React from 'react';
import { Popup } from '../../ui/Popup';
import ChallengePopupInfo from '../../ui/ChallengePopupInfo/ChallengePopupInfo';

export const ChallengePopup: React.FC = () => {
  return (
    <Popup>
      <ChallengePopupInfo />
    </Popup>
  );
};
