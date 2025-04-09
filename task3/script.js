

// Sample data
const data = {
    blog: [
      { title: "Minimal Blog", text: "Clean & simple layout", img: "./outdoors-study-group.webp" },
      { title: "Tech Blog", text: "Ideal for tutorials & tech news", img: "./outdoors-study-group.webp" },
      { title: "Minimal Blog", text: "Clean & simple layout", img: "./outdoors-study-group.webp" },
      { title: "Tech Blog", text: "Ideal for tutorials & tech news", img: "./outdoors-study-group.webp" },
      { title: "Minimal Blog", text: "Clean & simple layout", img: "./outdoors-study-group.webp" },
      { title: "Tech Blog", text: "Ideal for tutorials & tech news", img: "./outdoors-study-group.webp" },

    ],
    portfolio: [
      { title: "Creative Portfolio", text: "For designers and artists", img: "./outdoors-study-group.webp" },
      { title: "Developer Portfolio", text: "Showcase your dev work", img: "./outdoors-study-group.webp" },
      { title: "Creative Portfolio", text: "For designers and artists", img: "./outdoors-study-group.webp" },
      { title: "Developer Portfolio", text: "Showcase your dev work", img: "./outdoors-study-group.webp" },
      { title: "Creative Portfolio", text: "For designers and artists", img: "./outdoors-study-group.webp" },
      { title: "Developer Portfolio", text: "Showcase your dev work", img: "./outdoors-study-group.webp" },
  
    ],
    entertainment: [
      { title: "Movie Review Site", text: "Write about movies", img: "./outdoors-study-group.webp" },
      { title: "Music Gallery", text: "Share music collections", img: "./outdoors-study-group.webp" },
      { title: "Movie Review Site", text: "Write about movies", img: "./outdoors-study-group.webp" },
      { title: "Music Gallery", text: "Share music collections", img: "./outdoors-study-group.webp" },
      { title: "Movie Review Site", text: "Write about movies", img: "./outdoors-study-group.webp" },
      { title: "Music Gallery", text: "Share music collections", img: "./outdoors-study-group.webp" },
   
    ],
    socialmedia: [
      { title: "Connect App", text: "A clean modern social media UI", img: "./outdoors-study-group.webp" },
      { title: "Community Platform", text: "For forums or chat groups", img: "./outdoors-study-group.webp" },
      { title: "Connect App", text: "A clean modern social media UI", img: "./outdoors-study-group.webp" },
      { title: "Community Platform", text: "For forums or chat groups", img: "./outdoors-study-group.webp" },
      { title: "Connect App", text: "A clean modern social media UI", img: "./outdoors-study-group.webp" },
      { title: "Community Platform", text: "For forums or chat groups", img: "./outdoors-study-group.webp" },
  
    ],
    dating: [
      { title: "Romantic UI", text: "Dating app interface", img: "./outdoors-study-group.webp" },
      { title: "Swipe Cards", text: "Popular dating experience", img: "./outdoors-study-group.webp" },
      { title: "Romantic UI", text: "Dating app interface", img: "./outdoors-study-group.webp" },
      { title: "Swipe Cards", text: "Popular dating experience", img: "./outdoors-study-group.webp" },
      { title: "Romantic UI", text: "Dating app interface", img: "./outdoors-study-group.webp" },
      { title: "Swipe Cards", text: "Popular dating experience", img: "./outdoors-study-group.webp" },
  
    ],
    informational: [
      { title: "News Portal", text: "For news and articles", img: "./outdoors-study-group.webp" },
      { title: "Wikipedia Clone", text: "Text-heavy informational site", img: "./outdoors-study-group.webp" },
      { title: "News Portal", text: "For news and articles", img: "./outdoors-study-group.webp" },
      { title: "Wikipedia Clone", text: "Text-heavy informational site", img: "./outdoors-study-group.webp" },
      { title: "News Portal", text: "For news and articles", img: "./outdoors-study-group.webp" },
      { title: "Wikipedia Clone", text: "Text-heavy informational site", img: "./outdoors-study-group.webp" },
 
    ],
    photography: [
      { title: "Photo Gallery", text: "Clean photo display", img: "./outdoors-study-group.webp" },
      { title: "Portfolio Grid", text: "For photographers", img: "./outdoors-study-group.webp" },
      { title: "Photo Gallery", text: "Clean photo display", img: "./outdoors-study-group.webp" },
      { title: "Portfolio Grid", text: "For photographers", img: "./outdoors-study-group.webp" },
      { title: "Photo Gallery", text: "Clean photo display", img: "./outdoors-study-group.webp" },
      { title: "Portfolio Grid", text: "For photographers", img: "./outdoors-study-group.webp" },
   
    ],
    health: [
      { title: "Fitness Blog", text: "Workout & health tips", img: "./outdoors-study-group.webp" },
      { title: "Healthcare Info", text: "Medical advice & info", img: "./outdoors-study-group.webp" },
      { title: "Fitness Blog", text: "Workout & health tips", img: "./outdoors-study-group.webp" },
      { title: "Healthcare Info", text: "Medical advice & info", img: "./outdoors-study-group.webp" },
      { title: "Fitness Blog", text: "Workout & health tips", img: "./outdoors-study-group.webp" },
      { title: "Healthcare Info", text: "Medical advice & info", img: "./outdoors-study-group.webp" },
   
    ]
  };
  
  // Render cards
  function renderCards(sectionId, cardsData) {
    const container = document.getElementById(sectionId + "Cards");
    if (!container) return;
    container.innerHTML = '';
    cardsData.forEach(item => {
      container.innerHTML += `
        <div class="col-md-4 my-2">
          <div class="card h-100">
            <img src="${item.img}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.text}</p>
              <a href="#" class="btn btn-primary">Explore</a>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  // Initial render for all sections
  Object.keys(data).forEach(section => renderCards(section, data[section]));
  
  // Show only blog section by default
  document.querySelectorAll('.theme-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById('first').style.display = 'block';
  
  // Navbar click logic
  document.querySelectorAll('#customNavbar .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Remove active class from all nav links
      document.querySelectorAll('#customNavbar .nav-link').forEach(nav => nav.classList.remove('active'));
  
      // Add active to clicked one
      this.classList.add('active');
  
      // Hide all sections
      document.querySelectorAll('.theme-section').forEach(section => {
        section.style.display = 'none';
      });
  
      // Get target from href (e.g., #second)
      const target = this.getAttribute('href').replace('#', '');
      const section = document.getElementById(target);
      if (section) section.style.display = 'block';
    });
  });
  