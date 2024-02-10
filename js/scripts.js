// constants for query selector
const studentID = document.querySelector("#myStudentId");
const customNumber = document.querySelector("#customNumber");
const custColor = document.querySelector(".custColor");
const randColor = document.querySelector(".randColor");
const imageSelect = document.querySelector("#imageSelect");
const images = document.querySelector("#images");
const bodyPg = document.querySelector("body");



// function to change bg color   from user input and add student id
function changeCustomColor() {

    studentID.textContent = "Student ID: 200555847";

    // store index from 0-100
    index = Number(customNumber.value);

    switch (true) {
        case (index >= 0 && index <= 20):
            bodyPg.style.backgroundColor = "green";
            break;
        case (index > 20 && index <= 40):
            bodyPg.style.backgroundColor = "blue";
            break;
        case (index > 40 && index <= 60):
            bodyPg.style.backgroundColor = "orange";
            break;
        case (index > 60 && index <= 80):
            bodyPg.style.backgroundColor = "purple";
            break;
        case (index > 80 && index <= 100):
            bodyPg.style.backgroundColor = "yellow";
            break;
        default:
            bodyPg.style.backgroundColor = "red";
            console.log("not in range");
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    // we genarate a random number from 0 - 100 (inclusive)
    index = Math.floor(Math.random() * 101);
    console.log("The Random Index is: " + index);

    // we replace our value in our input field for visibility.
    customNumber.value = index;

    // we use the previous functions to use the same conditions.
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    const imageSrc = ["./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg", "./img/img4.jpg", "./img/img5.jpg"];

    if (imageSelect.length !== 6) {
        let count = 1;
        for (const img of imageSrc) {
            var option = document.createElement("option");
            // Give a meaninful name to each option
            option.textContent = `Image ${count}`;
            option.value = img;
            imageSelect.appendChild(option);
            count++;
        }
    }
}

// function to change image
function changeImage() {
    images.setAttribute("src", imageSelect.value);
    // images.src = imageSelect.value;
    images.setAttribute("alt", imageSelect.value.slice(6, 10).toUpperCase());
}

// event listeners for on click event of buttons and select
custColor.addEventListener('click', changeCustomColor);
randColor.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('click', addList);

// event listeners for on change event of select
imageSelect.addEventListener('change', changeImage);

