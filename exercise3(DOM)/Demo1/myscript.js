// Declare variables
var val1 = 3;
var val2 = 8;
var myName = "Bravey Mahagia"

//document object
document.getElementById("my-btn").addEventListener("click",
function() {
    myfunction(myName,val1,val2);
})

//Your function, hy remember your function
function myfunction(name, a, b) {
    var value  = a * b;
    var join   = name+": "+value;
    document.getElementById("value-demo").innerHTML = join;
}

