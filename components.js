// ============================================================
// SHARED COMPONENTS - Header, Footer, etc.
// ============================================================

// Generate Navigation HTML
function getNavigation(currentPage = 'home') {
    const navLinks = [
        { href: 'index.html', id: 'home', label: 'Home', icon: 'fa-home' },
        { href: 'projects.html', id: 'projects', label: 'Projects', icon: 'fa-flask' },
        { href: 'services.html', id: 'services', label: 'Services', icon: 'fa-cogs' },
        { href: 'gallery.html', id: 'gallery', label: 'Gallery', icon: 'fa-images' },
        { href: 'about.html', id: 'about', label: 'About', icon: 'fa-info-circle' },
        { href: 'contact.html', id: 'contact', label: 'Contact', icon: 'fa-envelope' }
    ];

    return `
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div class="glass border-b border-gray-200/50 dark:border-gray-700/50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16 md:h-20">
                    
                    <!-- Logo -->
                    <a href="index.html" class="flex items-center space-x-3 group">
                        <div class="relative">
                            <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary-500/50 transition-shadow">
                                <i class="fas fa-flask text-white text-lg md:text-xl"></i>
                            </div>
                            <div class="absolute -top-1 -right-1 w-3 h-3 bg-accent-400 rounded-full animate-pulse"></div>
                        </div>
                        <div class="hidden sm:block">
                            <h1 class="font-display font-bold text-lg md:text-xl text-gray-900 dark:text-white">
                                Research Lab
                            </h1>
                            <p class="text-xs text-primary-600 dark:text-primary-400 font-medium -mt-1">Kumarkhali</p>
                        </div>
                    </a>
                    
                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-6">
                        ${navLinks.map(link => `
                            <a href="${link.href}" 
                               class="hover-underline font-medium transition-colors ${currentPage === link.id 
                                   ? 'text-primary-600 dark:text-primary-400' 
                                   : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'}">
                                ${link.label}
                            </a>
                        `).join('')}
                    </div>
                    
                    <!-- Right Actions -->
                    <div class="flex items-center space-x-3">
                        <button id="darkModeToggle" class="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                            <i class="fas fa-moon text-lg dark:hidden"></i>
                            <i class="fas fa-sun text-lg hidden dark:inline text-yellow-400"></i>
                        </button>
                        
                        <a href="${getWhatsAppLink('Hello! I\'m interested in your services.')}" 
                           target="_blank" 
                           class="hidden sm:flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl shadow-lg shadow-green-500/30 transition-all hover:scale-105">
                            <i class="fab fa-whatsapp text-xl"></i>
                            <span>Contact</span>
                        </a>
                        
                        <button id="mobileMenuBtn" class="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                            <i class="fas fa-bars text-lg" id="menuIcon"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobileMenu" class="hidden md:hidden border-t border-gray-200 dark:border-gray-700">
                <div class="px-4 py-6 space-y-4 bg-white dark:bg-gray-900">
                    ${navLinks.map(link => `
                        <a href="${link.href}" 
                           class="flex items-center space-x-3 py-2 font-medium ${currentPage === link.id 
                               ? 'text-primary-600 dark:text-primary-400' 
                               : 'text-gray-600 dark:text-gray-300'}">
                            <i class="fas ${link.icon} w-5"></i>
                            <span>${link.label}</span>
                        </a>
                    `).join('')}
                    <a href="${getWhatsAppLink('Hello!')}" target="_blank" class="flex items-center space-x-3 py-2 text-green-500 font-medium">
                        <i class="fab fa-whatsapp text-xl w-5"></i>
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `;
}

// Generate Footer HTML
function getFooter() {
    return `
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                
                <!-- Brand -->
                <div class="md:col-span-2">
                    <div class="flex items-center space-x-3 mb-4">
                        <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                            <i class="fas fa-flask text-white"></i>
                        </div>
                        <span class="font-display font-bold text-xl">Research Lab Kumarkhali</span>
                    </div>
                    <p class="text-gray-400 mb-4 max-w-md">
                        Your trusted partner for innovative science and technology projects. We help students turn their ideas into reality.
                    </p>
                    <div class="flex space-x-4">
                        <a href="${CONFIG.socialLinks.facebook}" target="_blank" class="text-gray-400 hover:text-white transition-colors"><i class="fab fa-facebook-f text-lg"></i></a>
                        <a href="${CONFIG.socialLinks.youtube}" target="_blank" class="text-gray-400 hover:text-white transition-colors"><i class="fab fa-youtube text-lg"></i></a>
                        <a href="${CONFIG.socialLinks.instagram}" target="_blank" class="text-gray-400 hover:text-white transition-colors"><i class="fab fa-instagram text-lg"></i></a>
                        <a href="${CONFIG.socialLinks.github}" target="_blank" class="text-gray-400 hover:text-white transition-colors"><i class="fab fa-github text-lg"></i></a>
                    </div>
                </div>
                
                <!-- Quick Links -->
                <div>
                    <h4 class="font-semibold text-lg mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="index.html" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
                        <li><a href="projects.html" class="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                        <li><a href="services.html" class="text-gray-400 hover:text-white transition-colors">Services</a></li>
                        <li><a href="about.html" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                        <li><a href="contact.html" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        <li><a href="faq.html" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                </div>
                
                <!-- Contact -->
                <div>
                    <h4 class="font-semibold text-lg mb-4">Contact Us</h4>
                    <ul class="space-y-3">
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-map-marker-alt text-primary-400 mt-1"></i>
                            <span class="text-gray-400">${CONFIG.address}</span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <i class="fab fa-whatsapp text-green-400"></i>
                            <a href="${getWhatsAppLink('Hello!')}" target="_blank" class="text-gray-400 hover:text-white">${CONFIG.phone}</a>
                        </li>
                        <li class="flex items-center space-x-3">
                            <i class="fas fa-envelope text-red-400"></i>
                            <a href="mailto:${CONFIG.email}" class="text-gray-400 hover:text-white">${CONFIG.email}</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-800 pt-8 text-center">
                <p class="text-gray-400 text-sm">
                    © ${new Date().getFullYear()} Research Lab Kumarkhali. All rights reserved. 
                    <span class="text-red-500">❤</span> Made in Bangladesh
                </p>
            </div>
        </div>
    </footer>
    `;
}

// Initialize Common Functionality
function initCommon() {
    // Dark Mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) document.documentElement.classList.add('dark');
    
    darkModeToggle?.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
    });
    
    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    
    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar?.classList.add('shadow-lg');
        } else {
            navbar?.classList.remove('shadow-lg');
        }
    });
}
