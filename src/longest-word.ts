export const longestWord = (sen: string): string => {
  console.log(sen);
  const newsen = sen.replace(/[^a-zA-Z\s]/g, '');
  const words = newsen.split(' ');
  return words;
};
