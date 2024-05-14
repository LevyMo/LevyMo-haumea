// footer
let footer = document.createElement('footer');
let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement('p');
copyright.innerHTML = `Levy Morales ${thisYear}`;
footer.textContent = copyright.innerHTML;
let body = document.body
body.appendChild(footer)
// Skills
let Skills = ["JavaScript", "HTML", "CSS"];
let skillsSelection = document.getElementById("Skills");
let skillsList = document.getElementById("Skills-items");
for (let i = 0; i < Skills.length; i++) {
    let skill = document.createElement('li');
    skill.textContent = Skills[i];
    skillsSelection.appendChild(skill);
}