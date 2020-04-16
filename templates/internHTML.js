module.exports = {
  generateHTML(data) {
    return `
      <div class="col mb-4">
        <div class="card" style="background-color: #F78888;">
            <div class="card-int">
                <h2 class="emp-name">${data.name}</h2>
                <h2 class="emp-title">Intern</h2>
                <img
                src="../assets/img/intern.png"
                alt="Intern"
                style="width: 100%;"
                />
                <p class="border-box"  style="background-color: rgb(250, 194, 194)"><strong>ID</strong>: <br> ${data.id}</p>
                <p class="border-box"  style="background-color: rgb(250, 194, 194)"><strong>Email</strong>: <br> ${data.email}</p>
                <p class="border-box"  style="background-color: rgb(250, 194, 194)"><strong>University</strong>: <br> ${data.school}</p>
            </div>
        </div>
      </div>`
  }
}