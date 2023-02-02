const data = {
  count: 1
}

export function getCount() {
  return new Promise(resolve => {
    setTimeout(function(){
      return resolve(data.count)
    }, 500);
  })
}

export function addCount() {
  return new Promise(resolve => {
    setTimeout(function(){
      data.count ++
      return resolve(data.count)
    }, 500);
  })
}