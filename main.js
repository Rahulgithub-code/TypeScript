//Number Data Type--
// var num:number=2;
// console.log(num);
// console.log(typeof(num));
//  function add(num3:number,num2:number) {
//      let final = num3+num2;
//      console.log(final)   
// }
//String Data Type
// var str:string='Rahul';
// console.log(str);
// console.log(typeof(str));
// var str1="Kumar"
// console.log(str1);
// console.log(typeof(str));
// var str3= str +' '+ str1
// console.log(str3)
// var str3 = `${str} hello ${str1}`
// console.log(str3)
//Boolean Data Type
// var isActivate:boolean=true
// var isSupported=false
// console.log(typeof(isActivate))
// console.log(typeof(isSupported))
//void Data Type
// var unusable:void=null
// var unusable1:void=undefined
// console.log(unusable)
// console.log(unusable1)
// function usefull():void {
//     let num=2
//     console.log(num)
// }
// usefull()
//null Data type
// var a:null
// var b:null=undefined
// console.log(a)
// console.log(typeof(a))
// console.log(b)
// console.log(typeof(b))
//undefined Data Type
// var a:undefined;
// a=null
// console.log(a)
// console.log(typeof(a))
//Any Data Type
// var a: any
// a = 1
// a = "sds"
// a = true
// console.log(typeof(a))
// Array
// var array1:number[]=[1,2,3,4,5,6]
// var array2:string[]=['A','B','C']
// console.log(array1)
// console.log(typeof(array1))
// var list:Array<number>=[1,2,3,4,5,6,7]
// console.log(list)
// console.log(typeof(list))
//Tuple
// var emp:[number,string]=[1,"A"]
// console.log(emp);
// var user:[number,string,string,number]
// user=[1,'Rahul','Ranchi',8271]
// console.log(user)
// var data={
//     id: 1,
//     name: 'Rahul', 
//     address: 'Ranchi', 
//     phone: 827132
// }
// user=[data.id,data.name,data.address,data.phone]
// console.log(user)
// var employee:[number,string][]; //array in tuple
// employee=[[1,'A'],[2,'B'],[3,'C']]
// console.log(employee)
// console.log(typeof(employee))
//Interface 
// interface user{
//     FirstName:string,
//     LastName:string
// }
// var user1:user={FirstName: 'Rahul', LastName: 'Kumar'}
// var user1:user={LastName: 'Kumar', FirstName: 'Rahul', }
// console.log(user1)
// interface calc{
//     sum(num1:number,num2:number);
// }
// var calculator:calc={
//     sum(num1,num2){
//         return num1+num2
//     }
// }
// console.log(calculator.sum(2,4))
// Enums
// enum color{
//     red=2,
//     blue,
//     white,
//     pink
// }
// console.log(color.blue)
// enum direction{
//     up='UP',
//     down='DOWN',
//     left='LEFT',
//     right='RIGHT'
// }
// console.log(direction.down)
// Function
// function sum(num1:number,num2:number)
// {
//     return num1+num2
// }
// sum(2,5)
// function show():number {
//     return 100
// }
//  var values= sum(2,3)
//Generic  Data type
// function show<T>(arg:T):T{
//     return arg;
// }
// var output = show<string>("Rahul")
// var output1 = show<number>(1)
// console.log(output)
// console.log(output1)
//If-else
// if(true){
//     console.log("Hello")
// }
// else{
//     console.log("Hi")
// }
//Nasted if-else
// var x = 1
// if (x > 0) {
//     console.log("Greater than 0")
// }
// else if (x < 0) {
//     console.log("less than 0")
// }
// else {
//     console.log("equal to 0")
// }
//Switch case
// var x = "C"
// switch(x){
//     case "A" : {
//         console.log("A")
//         break
//     }
//     case "B" : {
//         console.log("B")
//         break
//     }
//     case "C" : {
//         console.log("C")
//         break
//     }
//     default : {
//         console.log("Invalid")
//         break
//     }
// }
// For Loop
// for(let i=1;i<=10;i++)
// {
//     console.log(i)
// }
// For ...of Loop
// var array = [1,2,3,4,5,6,7,8,9]
// for(let i of array){
//     console.log(i)
// }
// For ...in Loop
// var array = [1,2,3,4,5,6,7,8,10]
// for(let i in array){
//     console.log(i)
//     console.log(array[i])
// }
// While loop
// var i:number=1;
// while(i<=10){
//     console.log(i);
//     document.write(i.toString(),',')
//     i++;
// }
//Do...While Loop
// var i = 1;
// do{
//     console.log(i)
//     document.write(i.toString(),' ,')
//     i++
// }while(i<=10)
// Break
// var i = 1
// while(i<=10){
//     debugger
//     console.log(i)
//     if(i==5){
//         break
//     }
//     i++
// }
// Continue Statement
// var num=20
// var count=0
// for(i=0;i<=num;i++){
//     if(i%2==0){
//         continue
//     }
//     count++
// }
// console.log(count)
//Assignment Operator
// var a = 10;
// var b = 11;
// a+=b; //a = a + b;
// console.log(a)
// a = a+b
// //Negation Operator
// var a=10
// var b = -a //negation
// console.log(b)
// Data modifier/ Data specifier
// export class abc{
//      public x:number=10;
//      private y:number=10;
//      protected z:number=10;
//      display(){
//          this.x=11
//          this.y=11
//          this.z=11
//      }
// }
// var obj = new abc()
// obj.x
// obj.y; //not accessed
// obj.z; //not accessed
// class xyz extends abc {
//     x=100
//     y=120 //not accessed
//     z=200
// }
