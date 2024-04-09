export const getAvatarName = (ownerName: string) => {
  const [firstName, lastName] = ownerName.split(' ');

  if (!lastName) {
    return `${firstName[0].toUpperCase()}`;
  }

  return `${firstName[0].toUpperCase()} ${lastName[0].toUpperCase()}`;
};
