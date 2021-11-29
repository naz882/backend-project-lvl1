export const getRandomIntInclusive = (min, max) => {
  const min = Math.ceil(min);
  const max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}