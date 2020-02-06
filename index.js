"use strict";

// lab strings BEGIN

function l1(str, find_sym) {

    find_sym = new Set(find_sym);
    let counter = 0;
    [...str].forEach(el => counter += find_sym.has(el)?1:0);
    return counter; 
}

// l1("asds", "as");

// lab arrays BEGIN

function l2() {
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      
    
    let arr = [];
    
    for (let i = 0;i < 20; i++){
        arr.push(getRandom(0, 100));
    }
    
    arr.forEach(el => console.log(el));
}

// l2();

// lab functions BEGIN

let global_var = 0;

function func_declar(param1, _param2, _param3, _parampam = "pam") {
    console.log("this is  Function Declaration");

    let local_var = global_var;
    local_var++; // using global var as good man :)

    if (param1){
        console.log("good man");
    }else{
        console.log("missing argument param1");
    }
    

}

let func_exp = function (param1, _param2, _param3, parampam = "pam") {
    console.log(param1);
    console.log(parampam);
    console.log("this is function expression");

    global_var++ // changing global var inside as last pidor :)

};



console.log(global_var);
func_exp();
func_declar();
console.log(global_var);


// Lab server

const express = require("express");
const app = express();

app.get("/*", function(_request, response){
     
    response.send(_request.url + " 80");
});
app.listen(80);