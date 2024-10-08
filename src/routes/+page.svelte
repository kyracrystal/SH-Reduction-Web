<script lang="ts">
    import '/src/global.css';
    import { onMount } from 'svelte';
</script>

<!DOCTYPE html>
<html lang="en"> <!-- >:3 -->
    <head>
        <title>Self-Harm Reduction</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="/src/global.css">
        <!-- <script src="/scripts/mobileDetect.js" defer></script> -->
    </head>
    <body> 
        <header class="navigation-header">
            <div class="navigation-header-logo">
                <span>Self-Harm Reduction</span>
        </header>
        <div class="navigation-bar">
            <div class="navigation-bar-priority">
                <div class="navigation-bar-menu">
                    <i id="menu-btn" class='bx bx-menu'></i>
                </div>
                <a href="/">
                    <div class="navigation-bar-home">
                        <i class='bx bxs-home'></i>
                        <span>Home</span>
                    </div>
                </a>
            </div>
            <div class="scrollbox">
                <div class="scrollbox-inner">
                    <div class="navigation-bar-section-important-tabs">
                        <ul>
                            <li>
                                <a href="/">
                                    <i class='bx bxs-book-alt'></i>
                                    <span class="navigation-bar-item">General Information</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class='bx bxs-phone'></i>
                                    <span class="navigation-bar-item">Emergency Help</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.gg/hR7VZdXF4e" target="_blank">
                                    <i class='bx bxl-discord-alt'></i>
                                    <span class="navigation-bar-item">Community Discord</span>
                                    <i class='bx bx-link-external'></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class='bx bxs-contact'></i>
                                    <span class="navigation-bar-item">Contact Us</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="navigation-bar-section-information-tabs">
                        <ul>
                            <li>
                                <a href="/">
                                    <i class='bx bxs-info-circle'></i>
                                    <span class="navigation-bar-item">Harm Reduction Info</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class='bx bxs-info-circle'></i>
                                    <span class="navigation-bar-item">General Cutting Info</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class='bx bxs-chat'></i>
                                    <span class="navigation-bar-item">Common Questions</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="navigation-bar-section-other-tabs">
                        <ul>
                            <li>
                                <a href="https://github.com/kyracrystal/SH-Reduction-Web" target="_blank">
                                    <i class='bx bx-git-repo-forked'></i>
                                    <span class="navigation-bar-item">Repository</span>
                                    <i class='bx bx-link-external'></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class='bx bx-qr-scan'></i>
                                    <span class="navigation-bar-item">QR Code // Links</span>
                                    
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class='bx bxs-group'></i>
                                    <span class="navigation-bar-item">Credits</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="homepage-content">
            <div class="homepage-content-notice">
                <strong>
                    <h1 style="font-size: 1.5rem;">
                        NOTICE
                    </h1>
                    <p>
                        This website is a resource for those who self-harm, and those who want to help them. 
                        It is a collection of information, resources, and tools to help those who self-harm reduce the harm they do to themselves.
                    </p>
                    <p>
                        This website is not a substitute for professional help. If you are in immediate danger, please call emergency services.
                    </p>
                </strong>
            </div>
            
        </div>
    </body>
    <footer>
        <script>
            // Sidebar Toggle
            let btn = document.querySelector('#menu-btn');
            let sidebar = document.querySelector('.navigation-bar');
        
            btn.onclick = function () {
                sidebar.classList.toggle('active')
            };
            sidebar.classList.toggle('active')
        </script>
    </footer>
</html>