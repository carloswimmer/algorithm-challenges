function getFirstObject(array) {
  return array.find(item => Array.isArray(item));
}

function flatten(input) {
  let raw = [];
  
  if (input) raw = [...input];
  
  while (getFirstObject(raw)) {
      const innerArray = getFirstObject(raw);
      const others = raw.filter(item => item !== innerArray);
      
      raw = Array.isArray(innerArray) ? 
          [...others, ...innerArray] : 
          [...others, innerArray];
          
  console.log('raw', raw)
          
  }
  
  return raw;
}