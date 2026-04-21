function generateCV() {

const data = {
  name: document.getElementById("name").value,
  title: document.getElementById("title").value,
  summary: document.getElementById("summary").value,
  experience: document.getElementById("experience").value,
  skills: document.getElementById("skills").value
};

const template = document.getElementById("template").value;

document.getElementById("cv-preview").innerHTML = getTemplate(data, template);

}

function downloadPDF(){
const element = document.getElementById("cv-preview");
html2pdf().from(element).save();
}

function analyzeCV(){

let score = 0;
let text = document.getElementById("summary").value;

if(text.length > 50) score += 30;
if(text.includes("team") || text.includes("فريق")) score += 30;
if(text.includes("project") || text.includes("مشروع")) score += 40;

document.getElementById("analysis").innerHTML =
"📊 قوة السيرة: " + score + "%";
}