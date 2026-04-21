let lang = "ar";

/* عناصر */
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const analyzeBtn = document.getElementById("analyzeBtn");
const langBtn = document.getElementById("langBtn");

/* ===== اللغة ===== */
langBtn.onclick = () => {
  lang = lang === "ar" ? "en" : "ar";
};

/* ===== مساعد ===== */
function val(id){
  return document.getElementById(id).value || "";
}

function list(id){
  return val(id)
    .split("\n")
    .filter(x => x.trim() !== "")
    .map(x => `<li>${x}</li>`)
    .join("");
}

/* ===== إنشاء CV ===== */
generateBtn.onclick = () => {

document.getElementById("cv-preview").innerHTML = `
<div class="cv">

<div class="left">
<h2>${val("name")}</h2>
<p>${val("job")}</p>

<p>${val("phone")}</p>
<p>${val("email")}</p>
<p>${val("city")}</p>
</div>

<div class="right">

<h2>${lang==="ar"?"النبذة":"Summary"}</h2>
<p>${val("summary")}</p>

<h2>${lang==="ar"?"الخبرات":"Experience"}</h2>
<ul>${list("experience")}</ul>

<h2>${lang==="ar"?"التعليم":"Education"}</h2>
<ul>${list("education")}</ul>

<h2>${lang==="ar"?"المهارات":"Skills"}</h2>
<ul>${list("skills")}</ul>

<h2>${lang==="ar"?"المشاريع":"Projects"}</h2>
<ul>${list("projects")}</ul>

</div>

</div>
`;

};

/* ===== تحميل PDF ===== */
downloadBtn.onclick = () => {

if(!document.getElementById("cv-preview").innerHTML){
  alert("اضغط إنشاء أولاً");
  return;
}

window.print();

};

/* ===== تحليل ===== */
analyzeBtn.onclick = () => {

let score = 0;

if(val("summary").length > 30) score += 25;
if(val("experience").length > 20) score += 25;
if(val("skills").length > 10) score += 25;
if(val("projects").length > 10) score += 25;

document.getElementById("analysis").innerText =
"CV Score: " + score + "%";

};
