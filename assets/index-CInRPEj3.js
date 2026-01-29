(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(t){if(t.ep)return;t.ep=!0;const l=r(t);fetch(t.href,l)}})();const g=document.getElementById("themeToggle"),i=document.getElementById("sunIcon"),a=document.getElementById("moonIcon"),d=document.body,v=localStorage.getItem("theme")||"light";v==="dark"&&(d.classList.add("dark-mode"),i.style.display="none",a.style.display="block");g.addEventListener("click",()=>{d.classList.toggle("dark-mode"),d.classList.contains("dark-mode")?(i.style.display="none",a.style.display="block",localStorage.setItem("theme","dark")):(i.style.display="block",a.style.display="none",localStorage.setItem("theme","light"))});const b=document.getElementById("downloadBtn");b.addEventListener("click",()=>{const o=`RESUME

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
2014 - 2018`,e=new Blob([o],{type:"text/plain"}),r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download="John_Doe_Resume.txt",document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(r)});const E=document.getElementById("fileInput"),u=document.getElementById("uploadedFileInfo"),p=document.getElementById("fileName"),f=document.getElementById("fileSize");E.addEventListener("change",o=>{const e=o.target.files[0];if(e){p.textContent=e.name;const r=(e.size/1024).toFixed(2);f.textContent=`Size: ${r} KB`,u.style.display="block"}});const s=document.querySelector(".upload-box");s.addEventListener("dragover",o=>{o.preventDefault(),s.style.borderColor="var(--blue-600)",s.style.backgroundColor="var(--bg-secondary)"});s.addEventListener("dragleave",o=>{o.preventDefault(),s.style.borderColor="var(--border-color)",s.style.backgroundColor="var(--bg-primary)"});s.addEventListener("drop",o=>{o.preventDefault(),s.style.borderColor="var(--border-color)",s.style.backgroundColor="var(--bg-primary)";const e=o.dataTransfer.files[0];if(e){const r=[".pdf",".png",".jpg",".jpeg",".txt"],n="."+e.name.split(".").pop().toLowerCase();if(r.includes(n)){p.textContent=e.name;const t=(e.size/1024).toFixed(2);f.textContent=`Size: ${t} KB`,u.style.display="block"}else alert("Please upload only PDF, PNG, JPG, or TXT files.")}});const m=document.getElementById("contactForm");m.addEventListener("submit",o=>{o.preventDefault();const e=document.getElementById("name").value,r=document.getElementById("email").value,n=document.getElementById("message").value;console.log("Form submitted:",{name:e,email:r,message:n}),alert("Thank you for your message! I will get back to you soon."),m.reset()});const y=document.querySelectorAll(".nav-link");y.forEach(o=>{o.addEventListener("click",e=>{e.preventDefault();const r=o.getAttribute("href"),n=document.querySelector(r);n&&n.scrollIntoView({behavior:"smooth",block:"start"})})});window.addEventListener("scroll",()=>{const o=document.querySelectorAll("section"),e=window.scrollY+100;o.forEach(r=>{const n=r.offsetTop,t=r.offsetHeight,l=r.getAttribute("id");e>=n&&e<n+t&&y.forEach(c=>{c.classList.remove("active"),c.getAttribute("href")===`#${l}`?c.style.color="var(--text-primary)":c.style.color="var(--text-secondary)"})})});
