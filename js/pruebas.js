let nums = [];
for (let i = 0; i < 10; i++) {
    do {
        let n = parseFloat(prompt("introduce diez numeros entre el 1 y el 500"));
        /**/if (n < 1 || n > 500) {
            alert(n+", ese numero no está entre 1 y 500");
        } else {
            alert(n+" numero metido al array");
            nums.push(n);
        }
        
    } while (n < 1 || n > 500)
}