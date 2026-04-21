function generateCV(){

const data = {
name: val("name"),
title: val("title"),
phone: val("phone"),
email: val("email"),
city: val("city"),
address: val("address"),
summary: val("summary"),
experience: list("experience"),
education: list("education"),
certs: list("certs"),
skills: list("skills"),
projects: list("projects")
};

document.getElementById("cv-preview").innerHTML = `
<div class="cv">

<div class="sidebar">
<h2>${data.name}</h2>
<p>${data.title}</p>

<p>📞 ${data.phone}</p>
<p>✉️ ${data.email}</p>
<p>📍 ${data.city}</p>

<h3>Skills</h3>
${data.skills}

<h3>Certificates</h3>
${data.certs}
</div>

<div class="main">

<h2>Profile</h2>
<p>${data.summary}</p>

<h2>Experience</h2>
${data.experience}

<h2>Education</h2>
${data.education}

<h2>Projects</h2>
${data.projects}

</div>

</div>
`;
}

function val(id){
return document.getElementById(id).value;
}

function list(id){
return document.getElementById(id).value
.split("\n")
.map(item => `<p>• ${item}</p>`)
.join("");
}

function downloadPDF(){
const element = document.getElementById("cv-preview");
html2pdf().from(element).save();
}

function analyzeCV(){

let score = 0;

if(val("summary").length > 80) score += 25;
if(val("experience").length > 50) score += 25;
if(val("skills").length > 20) score += 25;
if(val("projects").length > 20) score += 25;

document.getElementById("analysis").innerHTML =
"🔥 قوة السيرة: " + score + "%";
}