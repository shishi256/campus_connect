// Load students from localStorage
let students = JSON.parse(localStorage.getItem("students")) || [];

function login() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Please fill all fields");
        return;
    }

    students.push({ name, email });
    localStorage.setItem("students", JSON.stringify(students));

    window.location.href = "dashboard.html";
}

function logout() {
    window.location.href = "login.html";
}

if (window.location.pathname.includes("dashboard.html")) {
    const list = document.getElementById("studentList");

    students.forEach(student => {
        const li = document.createElement("li");
        li.textContent = student.name + " (" + student.email + ")";
        list.appendChild(li);
    });
}

function createGroups() {
    let shuffled = [...students].sort(() => 0.5 - Math.random());

    let groupsDiv = document.getElementById("groups");
    groupsDiv.innerHTML = "";

    let tasks = [
        "Build a Mini Website",
        "Prepare a Tech Presentation",
        "Solve 5 Coding Problems",
        "Design a Poster",
        "Create a Startup Idea Pitch"
    ];

    let task = tasks[Math.floor(Math.random() * tasks.length)];

    for (let i = 0; i < shuffled.length; i += 2) {
        let group = shuffled.slice(i, i + 2);
        let groupDiv = document.createElement("div");
        groupDiv.innerHTML = `
            <p><strong>Group:</strong> ${group.map(s => s.name).join(", ")}</p>
            <p><strong>Task:</strong> ${task}</p>
            <hr>
        `;
        groupsDiv.appendChild(groupDiv);
    }
}