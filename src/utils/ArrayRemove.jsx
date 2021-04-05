function arrayRemove(arr, value) { 
  return arr.filter(function f(ele){ 
      return ele !== value; 
  });
}

export default arrayRemove;