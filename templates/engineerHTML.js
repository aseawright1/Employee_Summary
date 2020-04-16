module.exports = {
    generateHTML(data) {
        return `
        <div class="col mb-4">
            <div class="card" style="background-color: #F3D250;">
                <div class="card-eng">
                    <h2 class="emp-name">${data.name}</h2>
                    <h2 class="emp-title">Engineer</h2>
                    <img
                    src="../assets/img/engineer.png"
                    alt="Engineer"
                    style="width: 100%;"
                    />
                    <p class="border-box"  style="background-color: rgb(248, 230, 156)"><strong>ID</strong>: <br> ${data.id}</p>
                    <p class="border-box"  style="background-color: rgb(248, 230, 156)"><strong>Email</strong>: <br> ${data.email}</p>
                    <p class="border-box"  style="background-color: rgb(248, 230, 156)"><strong>GitHub</strong>: <br> ${data.github}</p>
                </div>
            </div>
        </div>`
    }
}