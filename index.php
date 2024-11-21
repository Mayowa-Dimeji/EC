<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BOTTERILL & BARTLETT'S</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <!-- Header Section -->
    <header class="bg-header text-white text-center py-3">
        <h1 class="text-uppercase">Rate Botterill & Bartlett’s 1-Day Business Workshop!</h1>
    </header>

    <!-- Main Section -->
    <main class="d-flex justify-content-center align-items-center bg-image">
        <div id="dynamicContent" class="container bg-white text-center p-4 rounded shadow">
            <h2 id="animatedText" class="text-primary mb-4"></h2>
            <form id="rateForm">
                <div class="mb-3">
                    <label for="fullName" class="form-label">Full Name</label>
                    <input type="text" id="fullName" name="fullName" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" name="email" class="form-control" required>
                </div>
                <div class="rating-stars d-flex flex-wrap justify-content-center gap-3">
                    <!-- Dynamically rendered stars -->
                </div>
                <button id="submitBtn" type="button" class="btn btn-gradient mt-4">Submit Your Rating</button>
            </form>
        </div>
    </main>

    <!-- Footer Section -->
    <footer class="bg-footer text-white text-center py-3">
        <div class="footer-logo">
            <img src="https://entrepreneurscircle.org/img/logo-white-long.png" alt="Logo" class="mb-2" style="max-width: 150px;">
        </div>
        <p class="mb-0 text-uppercase">&copy; 2024 Mayowa Oladimeji | All Rights Reserved</p>
    </footer>

    <!-- Loader -->
    <div id="loader" class="loader-container">
        <div class="loader"></div>
    </div>

    <!-- Bootstrap JS and Custom JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>