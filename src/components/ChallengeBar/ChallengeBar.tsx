import React from 'react';
import { useCards, useChallenge, useProducts } from '../../redux/selectors';
import Toast from '../../ui/Toast/Toast';
import { useAppDispatch } from '../../redux/hooks';
import { setIsFirstAdded } from '../../redux/features/cards';
import { getAllCards } from '../../helpers/getAllCards';
import { setError } from '../../redux/features/challenge';
import { daysSinceAndStatus } from '../../helpers/daysSinceAndStatus';
import { getStatusBarClass } from '../../helpers/getStatusBarClass';
import ButtonWithIcon from '../../ui/ButtonWithIcon/ButtonWithIcon';

const ChallengeBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const { challengeHasStarted, error, successfullStart } = useChallenge();
  const { isFirstAdded } = useCards();
  const { products } = useProducts();

  const handleToastClose = () => dispatch(setIsFirstAdded(false));

  const allCards = getAllCards(products);

  const removeError = () => dispatch(setError(''));

  const handleChallengeStart = () => {
    if (!allCards.length) {
      dispatch(setError('To start 42 days challenge please add at least 1 card'));

      setTimeout(() => removeError(), 3000);
    }
  };

  const { daysPassed, challengeStatus } = daysSinceAndStatus();

  const statusBarClass = `challenge-bar__status-bar ${getStatusBarClass(daysPassed)}`;

  if (challengeHasStarted) {
    return (
      <div className="challenge-bar challenge-bar--challenge-started">
        <div className="challenge-bar__top">
          <p className="text-body">42 Days Challenge</p>
          <p className="text-body">{daysPassed}/42 days left</p>
        </div>

        {successfullStart && (
          <Toast type="successfull" onClick={handleToastClose}>
            You successfully started a 42 days challenge!
          </Toast>
        )}

        <div className="challenge-bar__bottom">
          <div className={statusBarClass} />
          <p className="text-body">{challengeStatus}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="challenge-bar">
      <p className="text-body challenge-bar__text">
        42 Days challenge is a way which can increase your reviews in 300%!
        To start you need to have at least 1 active card.
      </p>

      <ButtonWithIcon
        iconClass="flag"
        to={allCards.length ? 'start-challenge' : ''}
        onClick={handleChallengeStart}
        additionalClass="challenge-bar__start-btn"
      >
        Start 42 Days Challenge
      </ButtonWithIcon>

      {isFirstAdded && (
        <Toast type="successfull" onClick={handleToastClose}>
          You successfully connected a card!
        </Toast>
      )}

      {error && (
        <Toast type="warning" onClick={removeError}>
          {error}
        </Toast>
      )}
    </div>
  );
};

export default ChallengeBar;
