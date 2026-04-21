function getTemplate(data, type) {

if(type === "modern"){
return `
<h1>${data.name}</h1>
<h3>${data.title}</h3>
<p>${data.summary}</p>

<h2>Experience</h2>
<p>${data.experience}</p>

<h2>Skills</h2>
<p>${data.skills}</p>
`;
}

if(type === "classic"){
return `
<h2>${data.name}</h2>
<p>${data.title}</p>

<hr>

<h3>Summary</h3>
<p>${data.summary}</p>

<h3>Experience</h3>
<p>${data.experience}</p>

<h3>Skills</h3>
<p>${data.skills}</p>
`;
}

if(type === "minimal"){
return `
<b>${data.name}</b> - ${data.title}

<p>${data.summary}</p>
<p>${data.experience}</p>
<p>${data.skills}</p>
`;
}

}