const printDigits = (num) => {
    if (num < 10) {
        console.log(num);
    } else {
        let count = 0;
        let reduceBy = 1;
        let moduloBy = 10
        while (num > 0) {
            if (num % moduloBy === 0) {
                console.log(count);
                count = 0;
                reduceBy *= 10;
                if ((moduloBy * 10) < num) {
                    moduloBy *= 10;
                }
            }
            num -= reduceBy;
            count++;
        }
    }
}

printDigits(123);