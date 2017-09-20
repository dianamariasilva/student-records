function addStudent(){
    var name = prompt("Please enter student name", "Diana Silva");
    var techPoints = prompt("Tech Point", "80%");
    var lifePoints = prompt("Tech Point", "90%");
    var active;
    var status = active;
    console.log(name);
    console.log(techPoints);
    console.log(lifePoints);
    console.log(status);
    if (name != null && techPoints != null && lifePoints != null) {
        document.getElementById("name").innerHTML =
        "Sudent Name:" + name;
        document.getElementById("tech").innerHTML =
        "TechPoints:" + techPoints;
        document.getElementById("life").innerHTML =
        "Life Points:" + lifePoints;
        document.getElementById("status").innerHTML =
        "Status: active";
    }
}