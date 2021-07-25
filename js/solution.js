let bodyEl = document.body

let bodyChilds = bodyEl.childNodes

console.log(bodyChilds,)
for(let node of bodyChilds){
    console.log(node)
    console.log(node.childNodes)


}



const ul = bodyChilds[1]

console.log(ul.childNodes)

let newArray = Array.from(ul.childNodes)

console.log(newArray)

let filterArray = newArray.filter(
    function (item){
        if(item.nodeName === 'LI'){
            return item;
        }
        return null
    }
)

console.log(filterArray)
console.log(filterArray.length)