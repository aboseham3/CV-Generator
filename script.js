let lang = "ar";

/* ===== TEXT ===== */
function t(ar,en){
return lang==="ar"?ar:en;
}

/* ===== LANGUAGE SWITCH (FIXED) ===== */
function switchLang(){

lang = lang==="ar"?"en":"ar";

document.getElementById("appTitle").innerText =
t("CV Builder Pro","CV Builder Pro");

document.getElementById("langBtn").innerText =
t("EN / AR","AR / EN");

document.querySelectorAll("input,textarea").forEach(el=>{
if(lang==="ar"){
el.placeholder = el.placeholder
.replace("Name","الاسم")
.replace("job","المسمى")
}else{
el.placeholder = el.placeholder
.replace("الاسم","Name")
.replace("المسمى","job")
}
});

}

/* ===== VALUE ===== */
function val(id){
return document.getElementById(id).value || "";
}

/* ===== LIST ===== */
function list(id){
return val(id)
.split("\n")
.filter(x=>x.trim()!=="")
.map(x=>`<li>${x}</li>`)
.join("");
}

/* ===== GENERATE FIXED ===== */
function generateCV(){

document.getElementById("cv-preview").innerHTML=`
<div class="cv">

<div class="left">
<h2>${val("name")}</h2>
<p>${val("title")}</p>

<p>${val("phone")}</p>
<p>${val("email")}</p>
<p>${val("city")}</p>
<p>${val("address")}</p>
</div>

<div class="right">

<h2>${t("النبذة","Summary")}</h2>
<p>${val("summary")}</p>

<h2>${t("الخبرات","Experience")}</h2>
<ul>${list("experience")}</ul>

<h2>${t("التعليم","Education")}</h2>
<ul>${list("education")}</ul>

<h2>${t("المهارات","Skills")}</h2>
<ul>${list("skills")}</ul>

<h2>${t("المشاريع","Projects")}</h2>
<ul>${list("projects")}</ul>

</div>

</div>
`;

}

/* ===== PDF FIX (100% NO WHITE PAGE) ===== */
function downloadPDF(){

const element=document.getElementById("cv-preview");

if(!element.innerHTML){
alert("Generate CV first");
return;
}

const clone=element.cloneNode(true);

const wrapper=document.createElement("div");
wrapper.style.position="fixed";
wrapper.style.left="-9999px";
wrapper.style.width="800px";
wrapper.appendChild(clone);

document.body.appendChild(wrapper);

const opt={
margin:0,
filename:"CV.pdf",
image:{type:"jpeg",quality:1},
html2canvas:{scale:3},
jsPDF:{unit:"px",format:[794,1123]}
};

setTimeout(()=>{
html2pdf().from(wrapper).set(opt).save().then(()=>{
wrapper.remove();
});
},700);

}

/* ===== ANALYSIS FIXED ===== */
function analyzeCV(){

let score=0;

if(val("summary").length>30) score+=25;
if(val("experience").length>20) score+=25;
if(val("skills").length>10) score+=25;
if(val("projects").length>10) score+=25;

document.getElementById("analysis").innerText=
"CV Score: "+score+"%";

}
