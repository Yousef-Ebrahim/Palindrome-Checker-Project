function palindrome(str) {
  let re = /[\W_]/g
  return str
  .toLowerCase()  
  .replace(re,'')
  .split('')
  .reverse()
  .join('')
        ===
  str.toLowerCase()  
  .replace(re,'')
  .split('')
  .join('');
};
