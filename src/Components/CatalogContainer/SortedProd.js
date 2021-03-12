const sortProducts = event => {
    debugger
    setSort(event.target.value) 
}

let sortedProduct = () => {
let aux = prod
if(sort === 'Ascendant'){
    return aux.sort((a,b) => parseFloat(a.price) - parseFloat(b.price))
}
if(sort === 'Descendant'){
    return aux.sort((a,b) => parseFloat(b.price) - parseFloat(a.price))
}
return aux
} 

