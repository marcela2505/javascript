// Principais métodos de arrays
let num = [1, 2, 3, 4, 5]

// MODIFICAM o array original
num.push(6) // Adiciona um elemento ao final
num.pop() // Remove o último elemento
num.unshift(0) // Adiciona um elemento no início
num.shift() // Remove o primeiro elemento
num.sort() // Ordena o array

// NÃO MODIFICAM o array original
num.indexOf(3) // Retorna o índice onde o valor foi encontrado
num.filter(n => n > 3) // Retorna um novo array contendo apenas os elementos que atendem a uma condição (nesse exemplo, a condição é ser maior que 3)
num.map(n => n * 2) // Retorna um novo array aplicando uma função a cada elemento do array original
num.forEach(n => console.log(`Item: ${n}`)) // Itera sobre cada elemento do array original, mas NÃO RETORNA um novo array e nem modifica o original

console.log(num)
console.log(num.length) // length -> Propriedade que retorna o comprimento de um array