const getReadingTimeLS = () => {
  const readingTimeData = localStorage.getItem("readingTime");
  if (readingTimeData) {
    return JSON.parse(readingTimeData);
  }
  return 0;
};

const saveReadingTime = (time) => {
  const convert = JSON.stringify(time);
  localStorage.setItem("readingTime", convert);
};

const setReadingTimeLS = (min) => {
  const readingTime = getReadingTimeLS();
  const addTime = readingTime + min;
  saveReadingTime(addTime);
};

export { setReadingTimeLS, getReadingTimeLS };
