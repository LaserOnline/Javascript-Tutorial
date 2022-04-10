// * -----------------------------------------------------------------------------------------------------
let money = 500+500;
let price = 99.99;

let message = 'message :';
let name = "James";

let checkname = false;
let checkProduct = true;

let age = 20+10;
console.log(typeof(money))
console.log(typeof(price))
console.log(typeof(message))
console.log(typeof(name))

console.log(typeof(checkname));
console.log(typeof(checkProduct));

console.log(age)
console.log("ยกกำลัง",5**2);
// * -----------------------------------------------------------------------------------------------------
// * การแปลงชนิด ข้อมูล Javascript
let number_int = parseInt("10.15");
let number_float = parseFloat("10.15");    
let number_x = +"10.05";

console.log(typeof(number_int))
console.log(typeof(number_float))
console.log(typeof(number_x))
console.log(number_int+number_float+number_x)

let number_string = ""+15;
let number_to_string = 35.05.toString();

console.log(typeof(number_string))
console.log(typeof(number_to_string))

// * -----------------------------------------------------------------------------------------------------
// * Array Javascript

let array_number = Array(1,2,3,4,5.5,6,"7",true);
    console.log(array_number);
    console.log("First = ",array_number[0]);
    console.log("One = ",array_number[1]);
    console.log("Number = ",array_number[4]);
    console.log("String = ",array_number[6]);
    console.log("Boolean = ",array_number[8]);

let colors = ["red","blue","green","yellow","pink", "black"];   
    colors[5] = "orange";
    console.log(colors[5])
// * -----------------------------------------------------------------------------------------------------

let boolean_a = 5, boolean_b = 10
//? let check_boolean = (boolean_a == boolean_b)

console.log(boolean_a == boolean_b)
console.log(boolean_a != boolean_b)
console.log(boolean_a <= boolean_b)
console.log(boolean_a >= boolean_b)

let score = 100;
    console.log(score >= 70 || score <= 80); //* or ซ้าย || ขวา เป็นจริง
    console.log(score <= 70 && score <= 80); //* && เป็นจริงทั้งคู่
// * -----------------------------------------------------------------------------------------------------

let month = 1;

let name_month;

    switch(month){
        case 1: name_month = "มกราคม";
        break;
        case 2: name_month = "กุมภาพันธ์";
        break;
        case 3: name_month = "มีนาคม";
        break;
        case 4: name_month = "เมษายน";
        break;
        default : name_month = "ไม่มีข้อมูล";
    }
    console.log(name_month);

// * -----------------------------------------------------------------------------------------------------
let X = 3;

if( X%2 == 0){
    console.log("เลขคู่");
    }else{
        console.log("เลขคี่");
    }
// * -----------------------------------------------------------------------------------------------------

let count = 1;
    while(count<=5){
        console.log("วนลูปนี้ครั้งที่",count);
        if(count==3){
            break;
        }
        count++;
    }

// * -----------------------------------------------------------------------------------------------------

for(let count_for = 1; count_for<=5; count_for++){
    console.log("HelloWorld")
}
for(let count_loop_for = 1; count_loop_for<=10; count_loop_for++){
    if(count_loop_for == 10)
    continue
    if(count_loop_for == 5)
    break;
    console.log(count_loop_for);
}
    console.log("สิ้นสุดการวนลูป For");
// * -----------------------------------------------------------------------------------------------------

let count_do_while = 1;
    do{
        console.log(count_do_while);
        count_do_while++;
    }while(count_do_while<=5);

let count_while = 1;

    while(true){
        if(count_while === 200) 
        break;
        count_while++;
        console.log(count_while);
    }
