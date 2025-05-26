// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- Utility Components ---

const Typewriter = ({ text, delay = 100 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text.charAt(currentIndex));
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    // Changed to secondary purple for typewriter text
    return <span className="font-mono text-accent-secondary-purple">{currentText}</span>;
};

// --- 1. Header Component ---
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinkClass = (path) => `
        text-primary hover:text-accent-primary font-semibold relative pb-1 transition-colors duration-300 interactive-link
        ${location.pathname === path ? 'text-accent-primary after:w-full' : 'after:w-0'}
        after:h-0.5 after:bg-accent-primary after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300
    `;

    return (
        <header className="bg-hacker-bg-medium p-4 shadow-lg sticky top-0 z-[9999] border-b border-hacker-border-color">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-accent-primary font-mono retro-text">
                    <Link to="/" onClick={closeMenu} className="hover:text-accent-secondary-purple transition-colors duration-300"> {/* Hover color to secondary purple */}
                        TULIKA SRIVASTAVA
                    </Link>
                </h1>
                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        <li><Link to="/about" className={navLinkClass('/about')}>// ABOUT</Link></li>
                        <li><Link to="/projects" className={navLinkClass('/projects')}>// PROJECTS</Link></li>
                        <li><Link to="/contact" className={navLinkClass('/contact')}>// CONTACT</Link></li>
                    </ul>
                </nav>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-accent-primary focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="md:hidden bg-hacker-bg-medium py-4 shadow-lg border-t border-hacker-border-color">
                    <ul className="flex flex-col items-center space-y-4">
                        <li><Link to="/about" onClick={closeMenu} className="block text-primary hover:text-accent-primary font-semibold text-lg py-2 transition-colors duration-300 interactive-link">// ABOUT</Link></li>
                        <li><Link to="/projects" onClick={closeMenu} className="block text-primary hover:text-accent-primary font-semibold text-lg py-2 transition-colors duration-300 interactive-link">// PROJECTS</Link></li>
                        <li><Link to="/contact" onClick={closeMenu} className="block text-primary hover:text-accent-primary font-semibold text-lg py-2 transition-colors duration-300 interactive-link">// CONTACT</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

// --- 2. Footer Component ---
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-hacker-bg-medium text-gray-400 py-6 text-center text-sm border-t border-hacker-border-color">
            <div className="container mx-auto">
                <p className="font-mono retro-text">
                    <span className="text-accent-secondary-purple">_</span> {currentYear} <span className="text-accent-primary">TULIKA SRIVASTAVA</span>. ALL RIGHTS RESERVED. <span className="text-accent-secondary-purple">_</span>
                </p>
            </div>
        </footer>
    );
};

// --- 3. Page Components ---

const HomePage = () => {
    // Hero text remains uppercase for robotic feel
    const heroText = "Venturing into the realm of frontend, AI, and clean code — one curious line at a time 🚀.";

    return (
        <section id="hero" className="bg-hacker-bg-dark py-20 md:py-32 min-h-[calc(100vh-80px)] flex items-center justify-center text-center relative overflow-hidden scanline">
            <div className="animated-background"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center">
                    {/* Changed border color to secondary purple */}
                    <img src="/assets/tuli.jpg" alt="Your Name" className="w-60 h-60 rounded-full object-cover object-[top_100%] border-4 border-accent-secondary-purple shadow-lg mb-8 animate-pulse-glow border-gray-700" />
                    <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight font-mono retro-text">
                        HI,WORLD! I'M <span className="text-accent-primary">Tulika Srivastava</span>.
                    </h2>
                    <p className="text-lg md:text-xl text-primary mb-10 max-w-2xl mx-auto font-mono text-scanline">
                        <Typewriter text={heroText} delay={50} />
                        <span className="animate-pulse-slow text-accent-secondary-purple">_</span> {/* Secondary purple for cursor */}
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/projects" className="interactive-link bg-accent-primary hover:bg-accent-secondary-purple text-hacker-text-light font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 retro-text" data-text="VIEW_WORK">
                            VIEW_WORK
                        </Link>
                        {/* Changed hover color to a more fitting yellow/orange for contrast against purple */}
                        <a href="/assets/tulikares.pdf" download className="interactive-link bg-hacker-accent-yellow hover:bg-orange-600 text-hacker-text-light font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 retro-text" data-text="DOWNLOAD_RESUME">
                            DOWNLOAD_RESUME
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutPage = () => {
    return (
        <section id="about" className="bg-hacker-bg-medium py-20 border-b border-hacker-border-color scanline">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-accent-primary mb-10 relative inline-block font-mono after:block after:w-16 after:h-1 after:bg-accent-secondary-purple after:mx-auto after:mt-2 rounded-full retro-text"> {/* Accent primary & secondary purple */}
                    <span className="terminal-prompt">// ABOUT_ME</span>
                </h2>
                <div className="max-w-3xl mx-auto text-left text-primary leading-relaxed font-mono bg-hacker-bg-dark p-8 rounded-lg shadow-xl border border-hacker-border-color card-3d">
                    <p className="mb-4 text-lg">
                        {/* Only the prompt text gets scanline */}
                        <span className="terminal-prompt text-scanline">// ACCESSING_PROFILE_DATA...</span> <span className="animate-pulse-slow text-accent-secondary-purple">_</span>
                    </p>
                    <p className="mb-4 text-lg text-primary no-scanline-text">
                        "I’m a passionate third-year Computer Science student with a strong foundation in programming and a keen interest in artificial intelligence and computer vision."
                    </p>
                    <p className="mb-8 text-lg text-primary no-scanline-text">
                       My journey into tech began with a fascination for how software can solve real-world problems. I thrive on learning new technologies and love turning complex challenges into clean, creative solutions. When I’m not coding,  <span className="font-semibold text-accent-secondary-purple"> you’ll find me exploring new places 🌍, diving into fantasy novels 📚, battling it out in video games 🎮, or geeking out over the latest tech blogs 🧠.</span>.
                    </p>

                    <h3 className="text-2xl font-bold text-accent-primary mb-6 mt-12 font-mono retro-text"> {/* Accent primary purple */}
                        <span className="terminal-prompt">// SKILL_MATRIX.SCAN()</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Skill Categories - titles remain uppercase and purple */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md border border-hacker-border-color card-3d">
                            <h4 className="text-xl font-bold text-accent-primary mb-4 font-mono">LANGUAGES</h4>
                            <ul className="list-none p-0 m-0">
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">PYTHON</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">C++</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">JAVA</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">JAVASCRIPT</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">SQL</li>
                            </ul>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md border border-hacker-border-color card-3d">
                            <h4 className="text-xl font-bold text-accent-primary mb-4 font-mono">FRONTEND</h4>
                            <ul className="list-none p-0 m-0">
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">HTML5</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">CSS3</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">JAVASCRIPT (ES6+)</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">RESPONSIVE DESIGN</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">REACT</li>
                            </ul>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md border border-hacker-border-color card-3d">
                            <h4 className="text-xl font-bold text-accent-primary mb-4 font-mono">BACKEND</h4>
                            <ul className="list-none p-0 m-0">
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">NODE.JS (EXPRESS)</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">DJANGO</li>
                            </ul>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md border border-hacker-border-color card-3d">
                            <h4 className="text-xl font-bold text-accent-primary mb-4 font-mono">DATABASES</h4>
                            <ul className="list-none p-0 m-0">
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">SQL (POSTGRESQL, MYSQL)</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">MONGODB</li>
                            </ul>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md border border-hacker-border-color card-3d">
                            <h4 className="text-xl font-bold text-accent-primary mb-4 font-mono">TOOLS & PLATFORMS</h4>
                            <ul className="list-none p-0 m-0">
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">GIT & GITHUB</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">VS CODE</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">CANVA(for posters & UI design)</li>
                            </ul>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md border border-hacker-border-color card-3d">
                            <h4 className="text-xl font-bold text-accent-primary mb-4 font-mono">AI/ML/CV CONCEPTS</h4>
                            <ul className="list-none p-0 m-0">
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">LLMS INTEGRATION</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">COMPUTER VISION (OPENCV)</li>
                                <li className="bg-gray-600 text-primary rounded-md px-3 py-1 mb-2 inline-block mr-2 text-sm font-mono">RECOMMENDATION SYSTEMS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-hacker-bg-medium rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105 border border-hacker-border-color flex flex-col p-6 card-3d"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3 className="text-2xl font-bold text-accent-primary mb-3 font-mono retro-text">{project.title.toUpperCase()}</h3> {/* Accent primary purple, uppercase */}
            <p className="text-primary mb-4 flex-grow font-mono no-scanline-text">
                {project.description}
            </p>
            <p className="text-sm text-gray-400 font-medium mb-4 font-mono">
                <strong className="text-accent-secondary-purple">TECH STACK:</strong> {project.techStack.join(', ').toUpperCase()} {/* Secondary purple, uppercase */}
            </p>
        </div>
    );
};

const ProjectsPage = () => {
    const projects = [
        {
            id: 1,
            title: "SQLiify",
            description: "AI-powered NLP Tool to convert natural human language into complex SQL queries and give the result in user understandable language. Added speech functionality to improve accessibility.",
            techStack: ["MySQL", "Python", "PyCharm", "Google APIs", "LangChain", "Hugging Face", "Streamlit"],
        },
        {
            id: 2,
            title: "FOOD NEXUS",
            description: "An interactive food recommendation system that showcases complete restaurant menus and highlights top-rated dishes based on user feedback, while also providing budget-friendly meal combinations tailored to the user's input.",
            techStack: ["MySQL", "React", "Node.js", "Django"],
        },
        {
            id: 3,
            title: "VirtualDoodle – Draw in the air using your hand!",
            description: "Track your fingers with a webcam to draw, erase, clear, or save your sketches—no mouse or pen needed. Gestures: One finger = draw, Two fingers = erase, Full palm = clear, Press 's' = save image.",
            techStack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
            videoDemo: "https://www.youtube.com/embed/your_virtual_doodle_video_id"
        },
    ];

    return (
        <section id="projects" className="bg-hacker-bg-dark py-20 border-b border-hacker-border-color scanline">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-accent-primary mb-10 relative inline-block font-mono after:block after:w-16 after:h-1 after:bg-accent-secondary-purple after:mx-auto after:mt-2 rounded-full retro-text">
                    <span className="terminal-prompt">// PROJECT_LOGS</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactPage = () => {
    return (
        <section id="contact" className="bg-hacker-bg-medium py-20 scanline">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-accent-primary mb-10 relative inline-block font-mono after:block after:w-16 after:h-1 after:bg-accent-secondary-purple after:mx-auto after:mt-2 rounded-full retro-text">
                    <span className="terminal-prompt">// ESTABLISH_CONNECTION</span>
                </h2>
                <p className="text-lg text-primary mb-8 max-w-2xl mx-auto font-mono no-scanline-text">
                    {/* Only the prompt text gets scanline */}
                    <span className="terminal-prompt text-scanline">// INITIATING_SECURE_LINK...</span> <span className="animate-pulse-slow text-accent-secondary-purple">_</span>
                    <br/>
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>
                <div className="flex flex-col items-center space-y-4 text-lg text-primary font-mono">
                    <p>
                        EMAIL: <a href="mailto:tulikasrivastavas09@gmail.com" className="interactive-link text-accent-primary hover:text-accent-secondary-purple hover:underline transition-colors duration-300" data-text="EMAIL_ME">TULIKASRIVASTAVAS09@GMAIL.COM</a>
                    </p>
                    <p>
                        LINKEDIN: <a href="https://www.linkedin.com/in/tulika-srivastava-5b1a35244/" target="_blank" rel="noopener noreferrer" className="interactive-link text-accent-primary hover:text-accent-secondary-purple hover:underline transition-colors duration-300" data-text="LINKEDIN_PROFILE">LINKEDIN.COM/IN/TULIKA-SRIVASTAVA-5B1A35244</a>
                    </p>
                    <p>
                        GITHUB: <a href="https://github.com/techinbuddy09" target="_blank" rel="noopener noreferrer" className="interactive-link text-accent-primary hover:text-accent-secondary-purple hover:underline transition-colors duration-300" data-text="GITHUB_REPO">GITHUB.COM/TECHINBUDDY09</a>
                    </p>
                    {/* Optional contact form can be added here */}
                </div>
            </div>
        </section>
    );
};

const NotFoundPage = () => (
    <div className="flex flex-col items-center justify-center h-full py-20 text-center bg-hacker-bg-dark text-primary scanline">
        <h1 className="text-4xl font-bold text-hacker-accent-yellow mb-4 font-mono retro-text">
            ERROR 404: FILE NOT FOUND
        </h1>
        <p className="text-lg text-primary mb-8 font-mono no-scanline-text">
            <span className="terminal-prompt">//</span> The requested resource could not be located.
        </p>
        <Link
            to="/"
            className="interactive-link bg-accent-primary hover:bg-accent-secondary-purple text-hacker-text-light font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 font-mono retro-text"
            data-text="RETURN_TO_BASE"
        >
            RETURN_TO_BASE
        </Link>
    </div>
);

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen font-mono antialiased">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;