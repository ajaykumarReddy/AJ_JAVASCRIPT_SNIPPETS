class Stack {
    stackArr = {};
    count = 0;
    pushElement(val) {
        this.stackArr[this.count] = val;
        this.count++;
    }
    removeElement() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        const removedVal = this.stackArr[this.count];
        delete this.stackArr[this.count];
        return removedVal;
    }

    getStackValues() {
        return this.stackArr;
    }

    size() {
        return this.count;
    }
    // Returns the value at the end of the stack
    peek() {
        return this.stackArr[this.size() - 1];
    }
}

const stack = new Stack();
stack.pushElement(10);
stack.pushElement(20);
stack.pushElement(30);
console.log(stack.getStackValues());

console.log(stack.removeElement());
console.log(stack.getStackValues());
