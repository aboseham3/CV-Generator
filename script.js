function val(id){
  return document.getElementById(id).value;
}

function list(id){
  return val(id)
    .split("\n")
    .filter(x => x.trim() !== "")
    .map(x => `<li>${x}</li>`)
    .join("");
}

/* ===== إنشاء CV ===== */
function generateCV(){

document.getElementById("cv-preview").innerHTML = `
<div class="cv">

<div class="left">
  <h1>${val("name")}</h1>
  <p>${val("title")}</p>

  <p>📞 ${val("phone")}</p>
  <p>✉️ ${val("email")}</p>
  <p>📍 ${val("city")}</p>
  <p>🏠 ${val("address")}</p>

  <div class="section">
    <h3>Skills</h3>
    <ul>${list("skills")}</ul>
  </div>
</div>

<div class="right">

  <div class="section">
    <h2>Summary</h2>
    <p>${val("summary")}</p>
  </div>

  <div class="section">
    <h2>Experience</h2>
    <ul>${list("experience")}</ul>
  </div>

  <div class="section">
    <h2>Education</h2>
    <ul>${list("education")}</ul>
  </div>

  <div class="section">
    <h2>Projects</h2>
    <ul>${list("projects")}</ul>
  </div>

</div>

</div>
`;
}

/* =====🔥 PDF FIX (CANVA STYLE FIX) ===== */
function downloadPDF(){

const source = document.getElementById("cv-preview");

// clone نظيف للطباعة
const clone = source.cloneNode(true);

const wrapper = document.createElement("div");
wrapper.style.position = "fixed";
wrapper.style.left = "-10000px";
wrapper.style.top = "0";
wrapper.style.width = "800px";
wrapper.style.background = "white";

wrapper.appendChild(clone);
document.body.appendChild(wrapper);

// إصلاح layout قبل الطباعة
clone.style.background = "white";
clone.style.color = "black";

const opt = {
  margin: 0,
  filename: 'CV-Pro.pdf',
  image: { type: 'jpeg', quality: 1 },
  html2canvas: {
    scale: 3,
    useCORS: true
  },
  jsPDF: {
    unit: 'px',
    format: [794, 1123], // A4
    orientation: 'portrait'
  }
};

setTimeout(() => {
  html2pdf()
    .set(opt)
    .from(wrapper)
    .save()
    .then(() => wrapper.remove());
}, 800);

}

/* ===== تحليل CV ===== */
function analyzeCV(){

let score = 0;

if(val("summary").length > 80) score += 25;
if(val("experience").length > 50) score += 25;
if(val("skills").length > 20) score += 25;
if(val("projects").length > 20) score += 25;

document.getElementById("analysis").innerHTML =
"📊 CV Score: " + score + "%";
}
