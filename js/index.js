// footer
let footer = document.createElement('footer');
let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement('p');
copyright.innerHTML = `Levy Morales ${thisYear}`;
footer.appendChild(copyright);
let body = document.body;
body.appendChild(footer);
// skills
let skills = ["JavaScript", "HTML", "CSS"];
let skillsSelection = document.getElementById("Skills");
let skillsList = skillsSelection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}