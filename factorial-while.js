let wpor10 = 10;
    let factor = wpor10;
    if (wpor10 === 0 || wpor10 === 1) 
      console.log(1); 
    while (wpor10 > 1) { 
      wpor10--;
      factor *= wpor10;
    }
    console.log ("El Resultado con while es " + factor);