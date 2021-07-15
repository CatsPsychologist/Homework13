let bodyEl = document.body

let bodyChilds = bodyEl.childNodes

console.log(bodyChilds)
for(let node of bodyChilds){
    console.log(node)

}

const ul = bodyChilds[1]

console.log(ul.childNodes)
