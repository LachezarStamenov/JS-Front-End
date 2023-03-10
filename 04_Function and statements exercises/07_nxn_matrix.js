function matrixPrinter(num) {
    console.log((Array(num).fill(Array(num).fill(num).join(' '))).join('\n'))
}

matrixPrinter(7)