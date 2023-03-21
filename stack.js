class Stack {
  constructor() {
    this.pilha = [];
  }
  add(pilhas) {
    this.pilha.push(pilhas);
  }
  pop() {
    const popped = this.pilha.pop(this.pilha);
    console.log(`Removido ${popped}`);
  }
  peek() {
    console.log(`Topo da Pilha: ${this.pilha[this.pilha.length - 1]}`);
  }

  isEmpty() {
    if (this.pilha) return console.log(!this.pilha.length);
  }
}
stack = new Stack();
stack.add("C");
stack.add("C++");
stack.add("C#");
stack.pop();
stack.peek();
stack.isEmpty();
console.log(stack);
