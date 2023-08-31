const getTime = (time) => {
  const min = Math.floor(time / 60);
  const second = time % 60;

  return `${min < 10 ? "0" + min : min}: ${
    second < 10 ? "0" + second : second
  }`;
};

export default getTime;
