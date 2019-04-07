//Nomor 1
console.log('Nomor 1');
var row1=5;
for (row1;row1>0;row1--){
    console.log('*');
}
console.log('');
//Nomor 2
console.log('Nomor 2');
var row2=5;
for (row2;row2>0;row2--){
  var b='';
  for(var j=0;j<5;j++){
    b+='*';
  }
  console.log(b);
}
console.log('');
//Nomor 3
console.log('Nomor 3');
var row3=5;

for (var i=0;i<row3;i++){
var b='';
    for (var j=0; j<=i;j++){
      b+='*';
    }
    console.log(b);
}