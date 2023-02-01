const data = {
  cont: 1
}

export function getCont() {
  return new Promise(resolve => {
    setTimeout(function(){
      return resolve(data.cont)
    }, 500);
  })
}

export function addCont() {
  return new Promise(resolve => {
    setTimeout(function(){
      data.cont ++
      return resolve(data.cont)
    }, 500);
  })
}