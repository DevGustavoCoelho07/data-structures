class Stack {
  constructor() {
    this.pilha = [];
  }
  add(pilhas) {
    this.pilha.push(pilhas);
  }
  peek() {
    console.log(`Topo da Pilha: ${this.pilha[this.pilha.length - 1]}`);
  }
}
stack = new Stack();
stack.add("C");
stack.add("C++");
stack.peek();
console.log(stack);
