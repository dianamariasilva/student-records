var btnAdd = document.getElementById("add"); 
var btnAll = document.getElementById("all"); 
var laboratoria = [];
function addStudent(){
    var student = {
        name : prompt("Please enter student name", "Diana Silva"),
        techPoints : prompt("Tech Point", "80%"),
        lifePoints : prompt("Tech Point", "90%"),
        status : true
    }

    laboratoria.push(student);

    console.log(laboratoria);
    // function allStudents(){
    //     laboratoria.push(student);
    //     console.log(laboratoria);
    // }

    // btnAll.onclick= function(){
    //     allStudents();
    // }

    // console.log(name);
    // console.log(techPoints);
    // console.log(lifePoints);
    // console.log(status);
    if (student.name != null && student.techPoints != null && student.lifePoints != null) {
        document.getElementById("name").innerHTML =
        "Student Name:" + student.name;
        document.getElementById("tech").innerHTML =
        "TechPoints:" + student.techPoints;
        document.getElementById("life").innerHTML =
        "Life Points:" + student.lifePoints;
        document.getElementById("status").innerHTML =
        "Status: active";
    }
}

btnAdd.onclick=function(){
    addStudent();
}

