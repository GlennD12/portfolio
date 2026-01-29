// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        localStorage.setItem('theme', 'dark');
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        localStorage.setItem('theme', 'light');
    }
});

// Download Resume
const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', () => {
    const resumeContent = `RESUME

John Doe
Web Developer

CONTACT
Email: john.doe@example.com
Phone: (555) 123-4567
Location: San Francisco, CA

SKILLS
- React, TypeScript, JavaScript
- HTML, CSS, Tailwind CSS
- Node.js, Express
- MongoDB, PostgreSQL
- Git, GitHub

EXPERIENCE

Senior Developer at Tech Corp
2020 - Present
- Led development of multiple web applications
- Mentored junior developers
- Improved application performance by 40%

Developer at StartUp Inc
2018 - 2020
- Built responsive web applications
- Collaborated with design team
- Implemented RESTful APIs

EDUCATION
Bachelor of Science in Computer Science
University of California
2014 - 2018`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'John_Doe_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// File Upload
const fileInput = document.getElementById('fileInput');
const uploadedFileInfo = document.getElementById('uploadedFileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    
    if (file) {
        fileName.textContent = file.name;
        const sizeInKB = (file.size / 1024).toFixed(2);
        fileSize.textContent = `Size: ${sizeInKB} KB`;
        uploadedFileInfo.style.display = 'block';
    }
});

// Drag and Drop Support
const uploadBox = document.querySelector('.upload-box');

uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.style.borderColor = 'var(--blue-600)';
    uploadBox.style.backgroundColor = 'var(--bg-secondary)';
});

uploadBox.addEventListener('dragleave', (e) => {
    e.preventDefault();
    uploadBox.style.borderColor = 'var(--border-color)';
    uploadBox.style.backgroundColor = 'var(--bg-primary)';
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.style.borderColor = 'var(--border-color)';
    uploadBox.style.backgroundColor = 'var(--bg-primary)';
    
    const file = e.dataTransfer.files[0];
    if (file) {
        // Check if file type is allowed
        const allowedTypes = ['.pdf', '.png', '.jpg', '.jpeg', '.txt'];
        const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
        
        if (allowedTypes.includes(fileExtension)) {
            fileName.textContent = file.name;
            const sizeInKB = (file.size / 1024).toFixed(2);
            fileSize.textContent = `Size: ${sizeInKB} KB`;
            uploadedFileInfo.style.display = 'block';
        } else {
            alert('Please upload only PDF, PNG, JPG, or TXT files.');
        }
    }
});

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--text-primary)';
                } else {
                    link.style.color = 'var(--text-secondary)';
                }
            });
        }
    });
});
