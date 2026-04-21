// جلب القيمة
function val(id){
  return document.getElementById(id).value;
}

// تحويل النص إلى نقاط
function list(id){
  return document.getElementById(id).value
    .split("\n")
    .filter(item => item.trim() !== "")
    .map(item => `<p>• ${item}</p>`)
    .join("");
}

// إنشاء CV
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
<p>🏠 ${data.address}</p>

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

// تحميل PDF (نسخة محسّنة 🔥)
function downloadPDF(){

  const original = document.getElementById("cv-preview");

  // نسخ العنصر
  const clone = original.cloneNode(true);

  // تعديل التصميم عشان يطلع مضبوط
  clone.style.background = "white";
  clone.style.color = "black";
  clone.style.padding = "20px";

  // حل مشكلة grid
  const cv = clone.querySelector(".cv");
  if(cv){
    cv.style.display = "block";
  }

  document.body.appendChild(clone);

  const opt = {
    margin: 0.3,
    filename: 'My-CV.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  // تأخير بسيط لضمان التحميل
  setTimeout(() => {
    html2pdf().set(opt).from(clone).save().then(() => {
      clone.remove();
    });
  }, 500);
}

// تحليل CV
function analyzeCV(){

let score = 0;

if(val("summary").length > 80) score += 20;
if(val("experience").length > 50) score += 20;
if(val("skills").length > 20) score += 20;
if(val("projects").length > 20) score += 20;
if(val("education").length > 20) score += 20;

let result = "🔥 قوة السيرة: " + score + "%<br>";

if(score < 60){
  result += "⚠️ حاول تضيف تفاصيل أكثر";
}else if(score < 80){
  result += "👍 جيد لكن يحتاج تحسين";
}else{
  result += "🚀 سيرة قوية جداً!";
}

document.getElementById("analysis").innerHTML = result;
}
