module.exports = {
    generateHTML (data) {
        return `<!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <link rel="stylesheet" href="../assets/css/style.css">
            
            <title>My Team</title>
        </head>
        <body>
            <div class="header justify-content-center">
                <h1>The Dream Team</h1>
            </div>
            <div class="container">
                <div id="main" class="row row-cols-lg-3 justify-content-center">
                ${data}
                </div>
            </div>
        </body>
      </html>`
    }
}