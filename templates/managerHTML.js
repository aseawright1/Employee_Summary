module.exports = {
  generateHTML(data) {
    return `
    <div class="col mb-4">
        <div class="card" style="background-color: #90CCF4;">
            <div class="card-man">
                <h2 class="emp-name">${data.name}</h2>
                <h2 class="emp-title">Manager</h2>
                <img
                src="../assets/img/manager.png"
                alt="Manager"
                style="width: 100%;"
                />
                <p class="border-box"  style="background-color: rgb(196, 227, 248)"><strong>ID</strong>: <br> ${data.id}</p>
                <p class="border-box"  style="background-color: rgb(196, 227, 248)"><strong>Email</strong>: <br> ${data.email}</p>
                <p class="border-box"  style="background-color: rgb(196, 227, 248)"><strong>Office Number</strong>: <br> ${data.office}</p>
            </div>
        </div>
    </div>`
  }
}