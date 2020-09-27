function lengthLimit(params) {
    class Stringer {
        constructor(innerString, innerLength) {
            this.innerString = innerString;
            this.innerLength = innerLength;
        }
        toString() {
            let keeper = this.innerString;
            if (this.innerLength < 0) {
                this.innerLength = 0
            }
            let current = this.innerString.split('');
            current.splice(this.innerLength)
            current = current.join('');
            if (this.innerLength >= this.innerString.length) {
                return current
            } else
                return current = current + '...'
        }
        decrease(n) {
            if (n < 0) {
                n = 0;
            }
            this.innerLength -= n
            if (this.innerLength < 0) {
                this.innerLength = 0;
            }
        }
        increase(b) {
            this.innerLength += b
        }
    }
    let test = new Stringer("Test", 5);
    console.log(test.toString()); // Test
    test.decrease(3);
    console.log(test.toString()); // Te...
    test.decrease(5);
    console.log(test.toString()); // ...
    test.increase(4);
    console.log(test.toString()); // Test

}

lengthLimit()