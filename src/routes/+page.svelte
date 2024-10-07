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
        <header class="nav-header">
            <div class="logo">
                <span>Self-Harm Reduction</span>
        </header>
        <div class="sidebar">
            <div class="sidebar-top">
                <div class="menu">
                    <i id="btn" class='bx bx-menu'></i>
                </div>
                <a href="/">
                    <div class="sidebar-home">
                            <i class='bx bxs-home'></i>
                            <span>Home</span>
                    </div>
                </a>
            </div>
            <div class="scrollbox">
                <div class="scrollbox-inner">
                    <div class="sidebar-important">
                        <ul>
                            <li class="sidebar-general-information">
                                <a href="/">
                                    <i class='bx bxs-book-alt'></i>
                                    <span class="nav-item">General Information</span>
                                </a>
                            </li>
                            <li class="sidebar-emergency">
                                <a href="/">
                                    <i class='bx bxs-phone'></i>
                                    <span class="nav-item">Emergency Help</span>
                                </a>
                            </li>
                            <li class="sidebar-community">
                                <a href="https://discord.gg/hR7VZdXF4e" target="_blank">
                                    <i class='bx bxl-discord-alt'></i>
                                    <span class="nav-item" style="width: 100%;">Community Discord</span>
                                    <i class='bx bx-link-external'></i>
                                </a>
                            </li>
                            <li class="sidebar-contact">
                                <a href="/">
                                    <i class='bx bxs-contact'></i>
                                    <span class="nav-item">Contact Us</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="sidebar-information">
                        <ul>
                            <li class="sidebar-harm-reduction-info">
                                <a href="/">
                                    <i class='bx bxs-info-circle'></i>
                                    <span class="nav-item">Harm Reduction Info</span>
                                </a>
                            </li>
                            <li class="sidebar-general-cutting-info">
                                <a href="/">
                                    <i class='bx bxs-info-circle'></i>
                                    <span class="nav-item">General Cutting Info</span>
                                </a>
                            </li>
                            <li class="sidebar-common-questions">
                                <a href="/">
                                    <i class='bx bxs-chat'></i>
                                    <span class="nav-item">Common Questions</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="sidebar-end">
                        <ul>
                            <li class="sidebar-repository">
                                <a href="https://github.com/kyracrystal/SH-Reduction-Web" target="_blank">
                                    <i class='bx bx-git-repo-forked'></i>
                                    <span class="nav-item" style="width: 100%;">Repository</span>
                                    <i class='bx bx-link-external'></i>
                                </a>
                            </li>
                            <li class="sidebar-links">
                                <a href="/">
                                    <i class='bx bx-qr-scan'></i>
                                    <span class="nav-item">QR Code // Links</span>
                                    
                                </a>
                            </li>
                            <li class="sidebar-credits" style="border-bottom: solid 1px #40454C;">
                                <a href="/">
                                    <i class='bx bxs-group'></i>
                                    <span class="nav-item">Credits</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="contents">
            <div class="contents-info">
                <h1>IMPORTANT</h1>
                <br>
                <p>
                    This website is a resource for those who self-harm, and those who want to help them. 
                    It is a collection of information, resources, and tools to help those who self-harm reduce the harm they do to themselves.
                </p>
                <br>
                <p>
                    This website is not a substitute for professional help. If you are in immediate danger, please call emergency services.
                </p>
            </div>
            
        </div>
    </body>
    <footer>
        <script>
            // Sidebar Toggle
            let btn = document.querySelector('#btn');
            let sidebar = document.querySelector('.sidebar')
        
            btn.onclick = function () {
                sidebar.classList.toggle('active')
            };
            sidebar.classList.toggle('active')
        </script>
    </footer>
</html>