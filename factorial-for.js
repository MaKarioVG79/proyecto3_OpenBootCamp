let  num = 10;
    if (num === 0 || num === 1)
      console.log (1);
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    console.log("El Resultado con for es " + num);