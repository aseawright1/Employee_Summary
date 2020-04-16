module.exports = {
    generateHTML(data) {
        return `<div class="col mb-4">
        <style>
            p.border-box {background-color: rgb(248, 230, 156)}
            .card {background-color: #F3D250;}
        </style>
            <div class="card">
                <div class="card-eng">
                    <h2 class="emp-name">${data.name}</h2>
                    <h2 class="emp-title">Engineer</h2>
                    <img
                    src="./assets/img/engineer.png"
                    alt="Engineer"
                    style="width: 100%;"
                    sizes=""
                    />
                    <p class="border-box"><strong>ID</strong>: <br> ${data.id}</p>
                    <p class="border-box"><strong>Email</strong>: <br> ${data.email}</p>
                    <p class="border-box"><strong>GitHub</strong>: <br> ${data.github}</p>
                </div>
            </div>
        </div>`;
    },
}