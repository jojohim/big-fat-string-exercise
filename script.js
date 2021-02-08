const button = document.querySelector("button");

button.addEventListener("click", getInput);

function getInput() {
    const stringValue = document.getElementById("string").value;
    const input = document.getElementById('input-text').value;
    //console.log(input);
    convertInput(input);

function convertInput(input) {

//console.log(input.lastIndexOf(` `));

 if(stringValue == 'name-uppercase') {
    document.getElementById('output-text').innerHTML = input.charAt(0).toUpperCase() + input.slice(1);
 }

 if(stringValue == 'find-first-name') {
     console.log("finding first name");
     document.getElementById('output-text').innerHTML = input.substr(0,input.indexOf(' '));
 }

 if (stringValue == 'length-first-name') {
     const firstName = input.substr(0,input.indexOf(' '));
     document.getElementById('output-text').innerHTML = firstName.length;

 }

 //Almost have this one but it's not quite right...
 if (stringValue == 'middle-name') {

    //const space1 = input.indexOf(' ');
    //const space2 = input.indexOf(' ') + 1;
    //middleName = input.substr(space1 , space2);
    //console.log(middleName);
    //document.getElementById('output-text').innerHTML = middleName;
 }

 if (stringValue == 'png-or-jpg' && input.endsWith(".jpg") == true) {
    document.getElementById('output-text').innerHTML = "This is a JPG file";
 }

 if (stringValue == 'png-or-jpg' && input.endsWith(".png") == true) {
    document.getElementById('output-text').innerHTML = "This is a PNG file";
}

//I didn't figure this one out too 😞
if (stringValue == 'hide-password') {
    const chars = input.split("");
}


if (stringValue == 'third-uppercase') {
    document.getElementById('output-text').innerHTML = "";

}

//Not sure how to select a separate character and then put it back together into the string
if (stringValue == 'uppercase-after-hyphen') {

}


}
}

//function displayOutput(input) {
  //  document.getElementById('output-text').innerHTML = input;
//}
