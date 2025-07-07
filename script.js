
  // Predefined HTML content for each option
  const contentTemplates = {
    home: `
    <h2>Welcome to My Portfolio! 🚀</h2><br>
        <p>Hello! I’m <span><b><i>Ayyappa Gandikota</i></b></span>, a passionate <b><i>Full Stack Developer</i></b> eager to create scalable and efficient web applications. I specialize in MongoDB, Express.js and Node.js, building dynamic and interactive websites that enhance user experiences.</p>
        <br>
        <p>I am always excited to take on new challenges and opportunities. Let’s connect and build something amazing together! 🚀</p>

    `,
    about: `
      <h2>About Me</h2><br>
      <p>I am <b><i>Ayyappa Gandikota</i></b>, a passionate <span><b><i>Full Stack Web Developer </i></b></span>with a strong foundation in HTML, CSS, JavaScript, Node.js, Express.js and MongoDB. I recently graduated from <b><i>St. Ann's College of Engineering and Technology</i></b> with a degree in <span><b><i>Computer Science and Engineering</i></b></span>.</p><br>
        <p>As a fresher, I am highly motivated to build scalable and efficient web applications. I have worked on multiple projects that demonstrate my skills in frontend and backend development, database management, and API integration.</p>
    `,
    skills: `
      <h2>Skills</h2><br>
      <pre>
    Programming Languages   : <span>Python</span>
    Front-End-Technologies  : <span>HTML,CSS,JavaScript</span>
    Frameworks              : <span>Node js,Express js</span>
    DataBase                : <span>Mongodb Atlas</span>
    Version Control         : <span>GitHub</span>
    Deployments             : <span>Vercel , Render</span>
    Tools                   : <span>Visual Studio Code</span>
        </pre>

    `,
    projects: `
      <h2>Projects</h2><br>
      <div class="projects-grid" role="list">
 <article class="project-card" role="listitem" tabindex="0" aria-label="Project Task Manager App">
  <div class="x">
    <h3>User Authentication System</h3>
    <p>A full-stack User Authentication System built with Node.js, Express, and MongoDB, featuring secure user registration, login, email verification, password reset, and session management. The frontend is designed using HTML and CSS.</p>
    <br>
    <div class="y">
      <a href="https://user-authentication-system-1-jlq3.onrender.com">
        <button>View Project</button>
      </a>
      <a href="https://github.com/Ayyappa-915/User-Authentication-System">
        <button>View SourceCode</button>
      </a>
    </div>
</article>
      
        <article class="project-card" role="listitem" tabindex="0" aria-label="Project Task Manager App">
          <div class="x">
          <h3>InstituteHub Web Application</h3>
          <p>A full stack  InstituteHub Web Application with JWT authentication, HTML,CSS & JavaScript frontend, and Express backend connected to MongoDB.</p>
          </div>
          <br>
          <div class="y">
          <a href="https://institutehub.onrender.com/">
            <button>View Project</button>
          </a>
          <a href="https://github.com/Ayyappa-915/InstituteHub">
            <button>View SourceCode</button>
          </a>
          </div>
        </article>
        <article class="project-card" role="listitem" tabindex="0" aria-label="Project Task Manager App">
          <div class="x">
          <h3>ATM Web Application</h3>
          <p>A full stack  ATM Web Application with  HTML,CSS & JavaScript frontend, and Express backend by implementing all banking functionalites and connected to MongoDB.</p>
          </div>
          <br>
          <div class="y">
          <a href="https://honey-atm.vercel.app/">
            <button>View Project</button>
          </a>
          <a href="https://github.com/Ayyappa-915/ATM-Web-Application">
            <button>View SourceCode</button>
          </a>
          </div>
        </article>
        <article class="project-card" role="listitem" tabindex="0" aria-label="Project Task Manager App">
          <div class="x">
          <h3>Waether Application</h3>
          <p>A full stack Weather Application with  HTML,CSS & JavaScript frontend, and Express backend by implementing Weather API for getting and displaying the weather data.</p>
          </div>
          <br>
          <div class="y">
          <a href="https://honey-weather.vercel.app/">
            <button>View Project</button>
          </a>
          <a href="https://github.com/Ayyappa-915/weather-API-application">
            <button>View SourceCode</button>
          </a>
          </div>
        </article>

<article class="project-card" role="listitem" tabindex="0" aria-label="Age Calculator Web Application">
  <div class="x">
    <h3>Age Calculator Web Application</h3>
    <p>A simple and interactive web application that calculates a user's exact age in years, months, and days based on their date of birth. Built using HTML, CSS, and JavaScript with a clean and user-friendly interface.</p>
    <br>
    <div class="y">
      <a href="https://age-calculator-3umx.onrender.com">
        <button>View Project</button>
      </a>
      <a href="https://github.com/Ayyappa-915/Age-Calculator/tree/main/Age-Calculator">
        <button>View SourceCode</button>
      </a>
    </div>
</article>




        


        
        <article class="project-card" role="listitem" tabindex="0" aria-label="Project Task Manager App">
          <div class="x">
          <h3>College Application</h3>
          <p>A full stack College Application with  HTML and CSS as frontend.This is the basic First Web Application using only HTml and CSS in btech CSE</p>
          <br>
          <div class="y">
          <a href="https://honey-sacet.vercel.app/">
            <button>View Project</button>
          </a>
          <a href="https://github.com/Ayyappa-915/college-webpage">
            <button>View SourceCode</button>
          </a>
          </div>
        </article>
      </div>
    `,
    contact: `
      <h2>Contact Me</h2><br>
      <pre>
Mobile Number       : <i>8328692315</i>
Gmail Account       : <i><a href="mailto:coder.honey.915@gmail.com?subject=Hello&body=Hi%20there!%20I%20wanted%20to%20reach%20out." style="color: var(--color-accent); text-decoration:none;">coder.honey.915@gmail.com</a></i>
Instagram Account   : <i><a href="https://instagram.com/dream_catcher_09012005" target="_blank" style="color: var(--color-accent); text-decoration:none;">instagram.com/dream_catcher_09012005</a></i>
Github Account      : <i><a href="https://github.com/Ayyappa-915" target="_blank" style="color: var(--color-accent); text-decoration:none;" >github.com/Ayyappa-915</a></i>
LinkedIn            : <i><a href="https://www.linkedin.com/in/ayyappa915/" target="_blank" rel="noopener" style="color: var(--color-accent); text-decoration:none;">linkedin.com/in/Ayyappa915</a></li>
        </pre>

    `
  };

  const options = document.querySelectorAll('.option');
  const contentArea = document.getElementById('content-area');

  function loadContent(option) {
    // Update content area
    contentArea.innerHTML = contentTemplates[option];
    contentArea.focus();
  }

  function setActiveOption(selected) {
    options.forEach(opt => {
      const isSelected = (opt === selected);
      opt.classList.toggle('active', isSelected);
      opt.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      opt.setAttribute('tabindex', isSelected ? '0' : '-1');
    });
  }

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      setActiveOption(opt);
      loadContent(opt.dataset.option);
    });
    opt.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        opt.click();
      }
    });
  });

  // Load initial content
  loadContent('home');
