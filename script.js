const object1 = {
    name: 'ABC',
    address: 'India'
  };
      
  const object2 = {
    address: 'India',
    name: 'ABC'
  };
      
  JSON.stringify(object1) === JSON.stringify(object2)
  // false
      
  _.isEqual(object1, object2)
  // true