const cats = []
const appendCats = []
const prependCaCats = []
const removeLastCats = []
const removeFirstCats = []

cats.length = 0
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat(name)
{
    return cats.push(name)
}
function destructivelyPrependCat(name)
{
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(name)
{
    return cats.pop()
}
function destructivelyRemoveFirstCat(name)
{
    return cats.shift()
}
function appenedCat(name)
{
    return appendCats = [...cats, name]
}
function prependCat(name)
{
    return prependCats = [name, ...cats]
}
function removeLastCat(name)
{
    removeLastCat = cats.slice()
    return removeLastCats.pop()
}
function removeFirstCat()
{
    removeFirstCat = cats.slice()
    return removeFirstCats.shift()
}
