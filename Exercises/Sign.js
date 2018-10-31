var arr = [];
function add() {
            
    var name = document.getElementById("name").value;
    // console.log(name);
    var place = document.getElementById("place").value; 
    var num = document.getElementById("num").value;

    var myObj = {
        "name": name,
        "place": place,
        "number": num
    };
    arr.push(myObj);
    document.getElementById("name").value = "";
    document.getElementById("place").value = "";
    document.getElementById("num").value = "";
}