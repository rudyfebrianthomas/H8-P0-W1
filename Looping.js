//Nomor 1 While
console.log('Nomor 1 while');
console.log('LOOPING PERTAMA');
    var i=2; 
    while(i<21){
        console.log(i+' - I love coding');
        i+=2;
    }
console.log('LOOPING KEDUA');
    var j=20;
    while(j>1){
        console.log(j+' - I will become fullstack developer');
        j-=2;
    }
console.log('');

//Nomor 2 for
console.log('Nomor 2 for');
console.log('LOOPING PERTAMA');
    for(var i=1;i<21;i++){
        console.log(i+' - I love coding');
    }
console.log('LOOPING KEDUA');
    for(var j=20;j>0;j--){
        console.log(j+' - I will become fullstack developer');
    }
console.log('');

//Nomor 3 perulangan kondisi
console.log('Nomor 3 perulangan kondisi');
    for(var i=0;i<100;i++){
        if(i%2==0){
            console.log('GANJIL');
        }else{
            console.log('GENAP');
        }
    }
console.log('');
    for(var i=1;i<101;i+=2){
        if(i%3==0){
            console.log(i+' kelipatan 3');
        }else{
            console.log('');
        }
    }
console.log('');
    for(var i=1;i<101;i+=5){
        if(i%6==0){
            console.log(i+' kelipatan 6');
        }else{
            console.log('');
        }
    }
console.log('');
    for(var i=1;i<101;i+=9){
        if(i%10==0){
            console.log(i+' kelipatan 10');
        }else{
            console.log('');
        }
    }