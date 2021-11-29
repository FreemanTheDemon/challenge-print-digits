const printDigits = (num) => {
    if (num < 10) {
        console.log(num);
    } else {
        let count = 0;
        let boolFlip = false;
        while (num > 0) {
            if (num < 10) {
                console.log(num);
                break;
            }
            if (num % 10 === 0) {
                console.log(count);
                count = 0;
                num /= 10;
                boolFlip = true;
            }
            if (!boolFlip) {
                num--;
                count++
            }
            boolFlip = false;
        }
    }
}

printDigits(1) // 1
printDigits(314) // 413
printDigits(12) // 21