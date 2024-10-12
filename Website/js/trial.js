<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Mode and Sidebar Toggle</title>
    <style>
        /* Basic styling for dark mode, body, sidebar, etc. */
        .body {
            background-color: white;
            color: black;
            transition: background-color 0.3s, color 0.3s;
        }
        .dark--mode {
            background-color: black;
            color: white;
        }
        .sidebar {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
        }
        .activemenu {
            transform: translateX(0);
        }
    </style>
</head>
<body class="body">
    <div class="sun">☀️</div>
    <div class="moon">🌙</div>
    <div class="menu">Menu</div>
    <div class="sidebar">Sidebar Content</div>
    <div class="main--container">Main Content</div>

    <script>
        let body = document.querySelector(".body");
        let sun = document.querySelector(".sun");
        let moon = document.querySelector(".moon");
        let menu = document.querySelector(".menu");
        let sidebar = document.querySelector(".sidebar");
        let mainContainer = document.querySelector(".main--container");

        // Apply smooth transitions for body and sidebar
        body.style.transition = "background-color 0.3s, color 0.3s";
        sidebar.style.transition = "transform 0.3s ease";

        // Function to toggle dark mode
        function toggleDarkMode() {
            body.classList.toggle("dark--mode");
            if (body.classList.contains("dark--mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        }

        // Attach toggleDarkMode to both sun and moon buttons
        sun.onclick = toggleDarkMode;
        moon.onclick = toggleDarkMode;

        // Check saved preference for dark mode
        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark--mode");
        }

        // Toggle sidebar visibility
        menu.onclick = function() {
            sidebar.classList.toggle("activemenu");
        };

        // Remove sidebar on main container click
        mainContainer.onclick = function() {
            sidebar.classList.remove("activemenu");
        };

        // Add keyboard accessibility for toggling dark mode and sidebar
        document.addEventListener("keydown", function(event) {
            if (event.key === "m") {
                sidebar.classList.toggle("activemenu");
            } else if (event.key === "d") {
                toggleDarkMode();
            }
        });
    </script>
</body>
</html>
