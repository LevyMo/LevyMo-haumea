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
//Messages
let messageForm = document.forms.leave_message;
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let usersName = messageForm.usersName.value;
    let usersEmail = messageForm.usersEmail.value;
    let usersMessage = messageForm.usersMessage.value;
    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage);
    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}"> ${usersName}</a><span>: ${usersMessage}</span>`;
    let removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', function(event){
        let entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});
// Fetch API
// GIT
fetch('https://api.github.com/users/LevyMo/repos')
.then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  })
  .then(data => {
    let repositories = data;
    console.log(repositories); // Do something with the data
    displayRepos(repositories);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
function displayRepos(repositories){
  let projectSection = document.getElementById('Projects');
  let projectList = projectSection.querySelector('ul');
  for (let i = 0; i < repositories.length; i++) {
    let project = document.createElement('li');
    project.innerHTML = repositories[i].name;
    projectList.appendChild(project);
  }
}