function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector(`#nested .target`)
}

function deepestChild(){
  var list = document.querySelector('#grand-node')

  while(list.querySelector('div') != null){
    list = list.querySelector('div')
  }
  return list
}

function increaseRankBy(n){
  var list = document.getElementById('app').querySelectorAll('.ranked-list li')

  for(var i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}
