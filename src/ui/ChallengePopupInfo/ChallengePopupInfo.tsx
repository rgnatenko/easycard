import React from 'react';
import { TextWithIcon } from '../TextWithIcon';
import { Button } from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { setChallengeHasStarted, setSuccessfullStart } from '../../redux/features/challenge';
import { useDataFromStorage } from '../../helpers/useDataFromStorage';

const ChallengePopupInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const connect = () => {
    dispatch(setChallengeHasStarted(true));
    dispatch(setSuccessfullStart(true));
    useDataFromStorage.setChallengeStatus(true);

    setTimeout(() => {
      dispatch(setSuccessfullStart(false));
    }, 3000);

    navigate('./../');
  };

  return (
    <div className="challenge">
      <TextWithIcon
        iconClass='close'
        classToAdd='challenge__top'
        to='./../'
      >
        <h4>Start 42 Days Challenge</h4>
      </TextWithIcon>

      <img src="challenge-img.png" alt="" />

      <p className="text-body challenge__description">You are about to start the 42 days challenge.</p>

      <div className="challenge__buttons">
        <Link to="./../" className="secondary-button" >Cancel</Link>
        <Button btnType="primary" onClick={connect} >Connect</Button>
      </div>
    </div>
  );
};

export default ChallengePopupInfo;
