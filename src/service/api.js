export const getSigns = () => {
  // fetch("https://www.anapioficeandfire.com/api/books")    // an aray of objects
  return fetch("http://sandipbgt.com/theastrologer/api/sunsigns") // an array
    .then((responce) => responce.json());
};

export const getHoroscope = (sign, timeframe) => {
    return fetch(
        `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}`
    )
    .then((responce) => responce.json())
    .then(({ horoscope }) => horoscope);
  };
