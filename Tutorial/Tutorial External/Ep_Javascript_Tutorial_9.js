
function message(){
    alert("แจ้งเตือน")
}

function displayName(){
    document.write("James")
}

function plusNumber(x){
    console.log("This Number ",x)
}
plusNumber(10);

function getName(fname,lname,city="ไม่ระบุ"){
    console.log("First Name ",fname, "Last Name ",lname, "City ",city)
}
getName("James","Bond",);

function getSalary(salary){
    let bonus = 1000;
    return salary+bonus;
}

let salary = getSalary(15000)
console.log("Salary",salary)

function getIP(){
    return "127.0.0.1";
}
function getNumber(){
    return 100*100;
}

let myIP = getIP();
let total = getNumber();

console.log("This IP ", myIP)
console.log("Total ", total)

let colors = ["red","blue","green"];

let result = colors.sort();
console.log("Before ",colors)
colors.push("yellow")
console.log("After",result)
console.log("Reverse",result.reverse())
console.log(colors[0])
console.log(colors[colors.length-1])

let phone = ["Iphone x","Iphone 8","Iphone 7","Iphone 6","Iphone 5"]; 
let array_string = phone.toLocaleString();

phone.forEach(myData)
function myData(item){
    console.log("Index ",item)
}

for(let i=0; i< phone.length; i++){
    console.log("Index ",(i+1),phone[i])
}

let array_join = phone.join("*");
console.log("join",array_join)

let array_new = phone
console.log(array_new)
for(let i = array_new.length; i>0; i--){
    array_new.pop()
    console.log("pop ",array_new)
    
}

let array_a = ["Array_1", "Array_1", "Array_1", "Array_1"];
let array_b = ["Array_2", "Array_2", "Array_2", "Array_2"];

array_a = array_a.concat(array_b);
console.log(array_a)

let points = [10,-20,-30,40,50,-60,70,80];
console.log("Before ",points)

points.sort(function(a,b){
    return b-a;
})

console.log("After ",points)

let product = {
    name : "Nintendo Switch",
    price : 12000,
    color: "Black",
    category: "Gaming",  
}

for(let key in product){
    console.log(key,product[key])
}

function delete_Data(){
    let result = confirm("ต้องการลบข้อมูลหรือไม่ ?");
    console.log(result)
    if(result){
        alert("ลบข้อมูลเรียบร้อย")
    }else{
        alert("ยกเลิกการลบข้อมูล")
    }
}
