
// 这个简易的计算器目前只能计算整数的加减乘除切不支持连续的加减乘除

var first = 0;  //第一个数字
var second = 0; //第二个数字
var fu = "";//计算符号

function numberClick(e) {


    if (fu.length > 0) {

        if (e != "+" && e != "-" && e != "x" && e != "/") {
            second = second * 10 + Number(e);
            window.document.getElementById("iputNum").innerHTML = String(second);
            console.log("second"+second)
        }

    } else {

        if (e != "+" && e != "-" && e != "x" && e != "/") {
            first = first * 10 + Number(e);
             window.document.getElementById("iputNum").innerHTML = String(first);
             console.log("first"+first)

        } else {
            fu = e;
             console.log("fu"+fu)
        
             
        }

    }

}

// 等于号 清空 计算
function equalClick() {
   


    var number = 0;
    if (fu == "+") {
        number = first + second;
    } else if (fu == "-") {
        number = first - second;
    } else if (fu == "x") {
        number = first * second;
    } else if (fu == "/") {
        if(second == 0){
            number = 'NAN';
        }else{
           number = first / second; 
        }
        
    }
    window.document.getElementById("iputNum").innerHTML = String(number);
    first = number;
    second = 0;
    fu = "";
}

//清空数据
function cleanClick() {
    window.document.getElementById("iputNum").innerHTML = "";
    first = 0;
    second = 0;
    fu = "";
}
