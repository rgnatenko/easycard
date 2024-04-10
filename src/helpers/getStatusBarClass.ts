export const getStatusBarClass = (percent: number) => {
  if (percent <= 10) {
    return 'challenge-bar__status-bar--10';
  }
  if (percent <= 20) {
    return 'challenge-bar__status-bar--20';
  }

  if (percent <= 30) {
    return 'challenge-bar__status-bar--30';
  }

  if (percent <= 40) {
    return 'challenge-bar__status-bar--40';
  }

  if (percent <= 50) {
    return 'challenge-bar__status-bar--50';
  }

  if (percent <= 60) {
    return 'challenge-bar__status-bar--60';
  }

  if (percent <= 70) {
    return 'challenge-bar__status-bar--70';
  }

  if (percent <= 80) {
    return 'challenge-bar__status-bar--80';
  }

  if (percent <= 90) {
    return 'challenge-bar__status-bar--90';
  }

  if (percent <= 100) {
    return 'challenge-bar__status-bar--100';
  }
};
