class List {
    constructor(list = []) {
        this.list = list.sort((a, b) => a - b);
        this.size = this.list.length;
    }
    add(n) {
        this.list.push(n)
        this.list.sort((a, b) => a - b);
        this.size++;
        return;
    }
    remove(n) {
        if (n < this.list.length && n >=0) {
            this.list.splice(n, 1);
            this.size--;
            return;
        }else {
            throw new Error;
        }
    }
    get(n) {
        if (n < this.list.length && n >=0) {
        return this.list[n];
        }else {
            throw new Error;
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
