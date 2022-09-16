export const getFormattedLikes = (likes: number) => {
  if (`${likes}`.length === 7) {
    return (
      `${likes}`.slice(0, 1) +
      ',' +
      `${likes}`.slice(1, 4) +
      ',' +
      `${likes}`.slice(4)
    );
  } else {
    return `${likes}`.slice(0, 3) + ',' + `${likes}`.slice(3);
  }
};
