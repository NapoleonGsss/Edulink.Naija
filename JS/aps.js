/* ============================================================
   GLOBAL RESET & BASE
============================================================ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: #0a0a0a;
  color: #fff;
  overflow-x: hidden;
}

/* ============================================================
   HEADER & NAVIGATION
============================================================ */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  padding: 1.2rem 5%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00ffff;
}

.logo span {
  color: #ff00ff;
}

/* NAV LINKS */
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  transition: all 0.3s ease;
}

.nav-links a {
  color: white;
  text-decoration: none;
  position: relative;
}

.nav-links a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  left: 0;
  bottom: -5px;
  background: #00ffff;
  transition: 0.3s;
}

.nav-links a:hover::after {
  width: 100%;
}

/* ============================================================
   HAMBURGER MENU
============================================================ */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 22px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.menu-toggle .bar {
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  transition: all 0.3s ease;
}

/* Animated X */
.menu-toggle.active .bar:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active .bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .bar:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* ============================================================
   HERO SECTION
============================================================ */
.hero {
  background: url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  animation: floatBackground 30s infinite linear;
}

@keyframes floatBackground {
  0% { background-position: center top; }
  50% { background-position: center bottom; }
  100% { background-position: center top; }
}

.hero-content {
  background: rgba(0,0,0,0.6);
  padding: 2rem;
  border-radius: 10px;
  animation: fadeIn 2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-btn {
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  border: none;
  background: linear-gradient(90deg, #00ffff, #ff00ff);
  color: white;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.4s;
}

.hero-btn:hover {
  transform: scale(1.1);
  background: linear-gradient(90deg, #ff00ff, #00ffff);
}

/* ============================================================
   ABOUT SECTION
============================================================ */
.about {
  padding: 6rem 10%;
  text-align: center;
}

.read-more {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  text-decoration: none;
  border-radius: 25px;
  transition: 0.4s;
}

.read-more:hover {
  background: #00ffff;
  color: #000;
}

/* ============================================================
   PROJECTS SECTION
============================================================ */
.projects {
  background: #111;
  padding: 5rem 10%;
  text-align: center;
}

.project-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: linear-gradient(135deg, #1a1a1a, #222);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0,255,255,0.2);
  transition: transform 0.4s ease;
}

.project-card:hover {
  transform: translateY(-10px) scale(1.05);
}

/* ============================================================
   GALLERY SECTION
============================================================ */
.gallery {
  padding: 5rem 10%;
  text-align: center;
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.gallery img {
  width: 250px;
  border-radius: 10px;
  transition: 0.3s;
}

.gallery img:hover {
  transform: scale(1.05);
}

/* ============================================================
   FOOTER
============================================================ */
footer {
  background: #000;
  padding: 2rem;
  text-align: center;
  color: #aaa;
}

.social-icons a {
  color: #00ffff;
  margin: 0 0.5rem;
  font-size: 1.2rem;
  transition: 0.3s;
}

.social-icons a:hover {
  color: #ff00ff;
}

/* ============================================================
   RESPONSIVE DESIGN
============================================================ */
@media screen and (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    align-items: center;
    background: #111;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    z-index: 10;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s ease;
    opacity: 0;
    transform: translateY(-20px);
  }

  .nav-links.active {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }

  .nav-links li {
    width: 100%;
    text-align: center;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-links li a {
    color: white;
    font-size: 1.2rem;
    display: block;
    width: 100%;
  }
}
