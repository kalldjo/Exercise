const getElement = (identifier = "") => document.querySelector(identifier);

function verifySubmission (){
    let name = getElement("#ip1").value;
    let subject = getElement("#ip3").value;
    let text = getElement("#ip2").value;

    if (name && subject && text) {
        alert("sent sucessfully")
    }
    else {
        alert("Please fill in all required fields.")
    }

}
const emailBody = `Name: ${name}\nSubject: ${subject}\nText:\n${message}`;
  window.location.href = `mailto:kallitadjoe25@gmail.com?subject=${subject}&body=${encodeURIComponent(emailBody)}`;




getElement("#send").addEventListener("click", verifySubmission);