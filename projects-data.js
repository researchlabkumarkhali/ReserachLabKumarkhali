// ============================================================
// CONFIGURATION
// ============================================================
const CONFIG = {
    whatsappNumber: "8801XXXXXXXXX",  // Your WhatsApp number
    email: "info@researchlabkumarkhali.com",
    phone: "+880 1XXX-XXXXXX",
    address: "Kumarkhali, Kushtia, Bangladesh",
    socialLinks: {
        facebook: "https://facebook.com/researchlabkumarkhali",
        youtube: "https://youtube.com/@researchlabkumarkhali",
        instagram: "https://instagram.com/researchlabkumarkhali",
        github: "https://github.com/researchlabkumarkhali"
    }
};

// ============================================================
// PROJECT DATA - Edit this to add/update/remove projects
// ============================================================
const projectsData = [
    {
        id: 1,
        title: "Smart Home Automation System",
        shortDescription: "Control your home appliances with smartphone",
        fullDescription: "A comprehensive smart home automation system that allows you to control lights, fans, AC, and other appliances using your smartphone or voice commands. The system uses ESP32 microcontroller with Blynk app integration for seamless control from anywhere in the world.",
        category: "iot",
        price: "৳5,000 - ৳8,000",
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
            "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800"
        ],
        technologies: ["ESP32", "Arduino", "Blynk IoT", "Relay Module", "Mobile App"],
        youtubeUrl: "https://www.youtube.com/embed/VIDEO_ID",
        featured: true,
        dateAdded: "2024-01-15"
    },
    {
        id: 2,
        title: "Line Following Robot",
        shortDescription: "Autonomous robot that follows black lines",
        fullDescription: "An intelligent line following robot built using Arduino that can autonomously navigate along black lines on white surfaces. Perfect for robotics competitions and learning basic robotics concepts.",
        category: "robotics",
        price: "৳2,500 - ৳4,000",
        thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
            "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800"
        ],
        technologies: ["Arduino Uno", "IR Sensors", "L298N Motor Driver", "DC Motors"],
        youtubeUrl: "https://www.youtube.com/embed/VIDEO_ID",
        featured: true,
        dateAdded: "2024-01-10"
    },
    {
        id: 3,
        title: "Solar Powered Water Pump",
        shortDescription: "Eco-friendly irrigation system using solar energy",
        fullDescription: "A sustainable water pumping solution powered entirely by solar energy. Ideal for agricultural projects and science fairs.",
        category: "school",
        price: "৳1,500 - ৳3,000",
        thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800"
        ],
        technologies: ["Solar Panel", "DC Water Pump", "Charge Controller"],
        youtubeUrl: "",
        featured: false,
        dateAdded: "2024-01-05"
    }
    // Add more projects here...
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

// Get project by ID
function getProjectById(id) {
    return projectsData.find(p => p.id === parseInt(id));
}

// Get projects by category
function getProjectsByCategory(category) {
    if (category === 'all') return projectsData;
    return projectsData.filter(p => p.category === category);
}

// Get featured projects
function getFeaturedProjects() {
    return projectsData.filter(p => p.featured);
}

// Search projects
function searchProjects(query) {
    const q = query.toLowerCase();
    return projectsData.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.technologies.some(t => t.toLowerCase().includes(q))
    );
}

// Generate WhatsApp link
function getWhatsAppLink(message) {
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Generate project order WhatsApp link
function getProjectOrderLink(project) {
    const message = `Hello! I'm interested in ordering the "${project.title}" project.\n\nPrice Range: ${project.price}\n\nPlease provide more details.`;
    return getWhatsAppLink(message);
}
