function alpha(i) {
    console.log(i);
    if (i <= 1) {  
        return;
    } else {     
       alpha(i - 1);
    }
}

alpha(10);