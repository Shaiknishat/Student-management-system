document.getElementById('student-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const roll = document.getElementById('roll').value;
  const studentClass = document.getElementById('class').value;

  if (!name || !roll || !studentClass) {
    alert("Please fill in all fields.");
    return;
  }

  const table = document.getElementById('student-list');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${name}</td>
    <td>${roll}</td>
    <td>${studentClass}</td>
    <td><button class="delete">Delete</button></td>
  `;

  table.appendChild(row);

  document.getElementById('student-form').reset();
});

document.getElementById('student-list').addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }
});