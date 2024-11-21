<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rate Us</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <!-- Header Section -->
    <header class="bg-header text-white text-center py-3">
        <h1 class="logo">Rate Our Workshop</h1>
        <p class="subheading">We value your feedback!</p>
    </header>

    <!-- Main Section -->
    <main class="d-flex justify-content-center align-items-center bg-image">
        <div id="dynamicContent" class="container bg-white text-center p-5 rounded shadow">
            <p id="animatedText" class="display-5 fw-bold">
                We’re all ears! How was it for you? Rate us from 1 (awful) to 5 (awesome).
            </p>
            <form id="rateForm" class="mt-4">
                <div class="mb-3">
                    <label for="fullName" class="form-label">Full Name</label>
                    <input type="text" id="fullName" name="fullName" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" name="email" class="form-control" required>
                </div>
                <div class="rating-stars d-flex justify-content-center gap-3">
                    <!-- Dynamically rendered stars -->
                </div>
                <button id="submitBtn" type="button" class="btn btn-gradient mt-4">Submit Your Rating</button>
            </form>
        </div>
    </main>

    <!-- Footer Section -->
    <footer class="bg-footer text-white text-center py-3">
        <p class="mb-0">&copy; 2024 Your Organization | All Rights Reserved</p>
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