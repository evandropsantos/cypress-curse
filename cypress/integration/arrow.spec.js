it('nada agora', function() {})

const soma = (a, b) => a + b

console.log('soma --> ', soma(1, 4))


it('a function test...', function() {
  console.log('function ', this)
})

it('a arrow test...', () => {
  console.log('arrow ', this)
})
 