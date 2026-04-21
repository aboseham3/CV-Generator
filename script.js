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

/* ===== GENERATE (FIXED 100%) ===== */
function generateCV(){

const name = val("name");

if(!name){
  alert("Please enter name");
  return;
}

document.getElementById("cv-preview").innerHTML = `
<div class="cv">

<div class="left">
  <h1>${val("name")}</h1>
  <p>${val("title")}</p>

  <p>📞 ${val("phone")}</p>
  <p>✉️ ${val("email")}</p>
  <p>📍 ${val("city")}</p>
</div>

<div class="right">

  <h2>Summary</h2>
  <p>${val("summary")}</p>

  <h2>Experience</h2>
  <ul>${list("experience")}</ul>

  <h2>Education</h2>
  <ul>${list("education")}</ul>

  <h2>Skills</h2>
  <ul>${list("skills")}</ul>

  <h2>Projects</h2>
  <ul>${list("projects")}</ul>

</div>

</div>
`;
}

/* ===== PDF FIX (NO WHITE PAGE 🔥) ===== */
function downloadPDF(){

const element = document.getElementById("cv-preview");

if(!element.innerHTML){
  alert("Generate CV first");
  return;
}

const clone = element.cloneNode(true);

const wrapper = document.createElement("div");
wrapper.style.position = "fixed";
wrapper.style.left = "-9999px";
wrapper.style.width = "800px";
wrapper.appendChild(clone);

document.body.appendChild(wrapper);

const opt = {
  margin: 0,
  filename: 'CV.pdf',
  image: { type: 'jpeg', quality: 1 },
  html2canvas: { scale: 3 },
  jsPDF: { unit: 'px', format: [794,1123] }
};

setTimeout(() => {
  html2pdf().from(wrapper).set(opt).save().then(() => {
    wrapper.remove();
  });
}, 800);

}
