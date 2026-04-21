function improveText(){

let text = document.getElementById("summary").value;

let improved = text
.replace("اشتغلت", "قدت وشاركت في")
.replace("سويت", "قمت بتنفيذ")
.replace("I worked", "Led and contributed to")
.replace("I did", "Successfully executed");

document.getElementById("summary").value = improved;

}