
document.getElementById("btn").addEventListener("click", () => {
    const userdate = document.getElementById("birthday").value;
    const dateObject = new Date(userdate);
    const year = dateObject.getFullYear();
    const toDayDate = 2024;
    const age  = toDayDate - year;
    document.getElementById("result").innerHTML = `Your age is ${age} years old`;
});
