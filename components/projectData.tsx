export const projects = [
  // Vansippy
  {
    imageThumb: '/static/images/vansippy-card.jpg',
    imageUrl: '/static/images/vansippy-card.jpg',
    imageSmall: [
      '/static/images/vansippy-location.jpg',
      '/static/images/vansippy-mobile1.png',
      '/static/images/vansippy-mobile2.png',
      ''
    ],
    tags: ['New', 'Development', 'React'],
    title: 'Vansippy',
    subtitle: 'Happy Hour Finder Web App',
    title1: 'Mobile version',
    subtitle1: 'Describe a feature or step of the process here.',
    title2: 'Menu Component',
    subtitle2: 'Describe a feature or step of the process here.',
    title3: 'Example Feature',
    subtitle3: 'Describe a feature or step of the process here.',
    list1: [
      { title: 'React – For building a reactive, component-based front-end' },
      { title: 'Node.js – Back-end runtime for handling API logic' },
      { title: 'Express.js – Lightweight server framework used with Node.js' },
      { title: 'Axios – Promise-based HTTP client for making API calls' }
    ],
    list2: [{ title: '' }, { title: '' }],
    fullDescription:
      'A Full-Stack web application designed to help users easily discover and explore happy hour deals across Vancouver. Built using MERN (MongoDB, Express.js, React, and Node.js), VanSippy offers an intuitive user experience powered by real-time data, interactive map integration, and responsive UI components.',
    description:
      'Helping deal-seekers around Vancouver find Happy Hours at restaurants and bars close to them.',
    imageCaption1:
      'This app bridges that gap by bringing all those deals together into one sleek, user-friendly map interface, making it easier to plan your night or stumble into a new favorite spot.',
    imageCaption2:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption3:
      'This design achieves pixel-perfect responsiveness using Material UI and custom breakpoints, ensuring a seamless and flexible layout across devices. The grid system adapts content for different screen sizes, while images scale without distortion.',
    imageCaption4:
      'This Menu component is a part of the restaurant card, allowing users to toggle between the drinks and food menu sections. It uses conditional rendering to highlight the active section and disables inactive options based on the selected menu state.',
    paragraph1:
      'The frontend is built with React and styled using Material UI for a clean, responsive interface. The backend uses Express.js and Node.js to handle API requests, while MongoDB stores all venue and deal information. Axios enables real-time data fetching, and Mapbox powers the interactive map and geolocation features.',
    paragraph2:
      'Together, these technologies create a seamless platform for users to find local deals quickly and visually, making the happy hour hunt both efficient and enjoyable.',
    paragraph3:
      'Vansippy initially used the Yelp Fusion API to quickly source business data, but strict rate limits, poor image quality, and limited filtering made it difficult to build a reliable, Happy Hour–focused experience.',
    paragraph4:
      'To solve this, I built a custom Back-End API with Node.js and MongoDB. This gave me full control over the data schema, allowed real-time content updates, using CRUD and eliminated external dependencies. Now, the application supports more accurate, curated listings, improved performance and a flexible foundation for future features like an admin dashboard.',
    paragraph5:
      'The app uses the browser’s Geolocation API to get the user’s location, sends it to a Node.js backend, and fetches nearby venues from MongoDB using geospatial queries. Results are shown in real time on a React interface with Mapbox.',
    buttonText: 'Go to Project',
    gitHub: 'https://github.com/psyout/capstone-client',
    buttonVisit: 'View Site',
    buttonLink: '/projects/0',
    buttonHref: 'https://vansippy.com/',
    skills: ['React.js', 'MongoDB', 'MaterialUI']
  },

  // Instock App
  {
    imageThumb: '/static/images/instock-card.jpg',
    imageUrl: '/static/images/instock-card.jpg',
    imageSmall: [
      '/static/images/instock-mockup.jpg',
      '/static/images/instock-mockup-edit.jpg',
      '/static/images/instock-mockup-delete.jpg',
      ''
    ],
    tags: ['React', 'React Router', 'Express'],
    title: 'Instock Web App',
    subtitle: 'Inventory Management System',
    description:
      'A modern and scalable Inventory Management System for a client.',
    fullDescription:
      'The InStock project was developed during a web development bootcamp as a collaborative group project. The goal was to deliver a modern and scalable Inventory Management System for a client. The project required working as an Agile team, following Scrum methodologies and using tools like JIRA, Figma, and Git/GitHub for efficient collaboration and project management.',
    buttonText: 'Go to Project',
    buttonLink: '/projects/1',
    buttonHref: '',
    gitHub: 'https://github.com/mannyv123/instock-client',
    skills: ['React.js', 'Node', 'Express', 'MySQL', 'Figma'],
    imageCaption1:
      'When a new warehouse is added, the UI automatically updates if the list is rendered dynamically (e.g., using .map()). The new warehouse appears in the list as soon as it’s added to the data source, such as a state variable or database, without needing to reload the page.',
    imageCaption2:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption3:
      'When you edit a product, the form updates the local state with the new input. On submit, a PUT or PATCH request is sent to the backend with the updated data. If the request is successful, the backend responds with the updated product, and the UI state is refreshed, showing the changes instantly.',
    imageCaption4:
      'When deleting a product, a common visual error is that the item still appears in the UI even after it is been removed from the backend. This usually happens when the frontend state is not updated correctly after the delete action, or if the product list is not re-fetched to reflect the latest data.',
    paragraph1:
      'Warehouse & Inventory Management System built with Agile/Scrum: React (Router, BEM/SASS) Front-End, Node.js/Express & MySQL (Knex) back end, RESTful API, offering CRUD, dynamic search/filter, responsive design, and real-time validation.',
    paragraph2: '',
    paragraph5:
      "When a new warehouse is added, the UI updates dynamically, showing the new warehouse once it's added to the data source. This triggers state changes, re-renders, and actions like form resets. If the data is incomplete or invalid, validation errors may occur. When using MySQL, an API call stores the data, and the UI fetches the updated list. ",
    paragraph3: '',
    paragraph4: '',
    list1: [],
    list2: []
  },

  // Transportes Moran
  {
    imageThumb: '/static/images/transportes-moran-card.jpg',
    imageUrl: '/static/images/transportes-moran-card.jpg',
    imageSmall: [
      '/static/images/transportes-moran-servicios.jpg',
      '/static/images/transportes-moran-laptop-mockup.png',
      '/static/images/transportes-moran-laptop-mockup2.png'
    ],
    tags: ['Development', 'Design'],
    title: 'Transportes Moran',
    subtitle: 'Aggregate Solutions Co.',
    description:
      'Reliable Aggregate Manufacturing & Trucking Services for your construction needs.',
    fullDescription:
      'This website is a single-page application built with React and styled using SCSS for modular and maintainable styling. The project follows a component-based architecture, using custom components like Navbar, Hero, Projects, and Contact Form to organize and reuse interface elements efficiently. ',
    buttonText: 'Go to Project',
    buttonLink: '/projects/2',
    buttonHref: 'https://www.transportesmoran.cl/',
    gitHub: 'https://github.com/psyout/transportes-moran',
    skills: ['React', 'SCSS', 'JavaScript', 'Figma'],
    imageCaption1:
      'This website uses a straightforward and lightweight tech stack focused on performance and usability.',
    imageCaption2:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption3:
      'A well-designed website interface created using Figma, featuring a clean layout with intuitive navigation and responsive elements that adjust smoothly across different devices. The design includes detailed sections for project descriptions, images, and key skills, providing an engaging user experience.',
    imageCaption4:
      'Figma makes mobile-first design simple with grid layouts. Start with a mobile frame, apply a 4–6 column grid, and use consistent spacing. This helps keep layouts clean, readable, and easy to adapt for tablets and desktops. Designing for smaller screens first also forces you to prioritize content and usability.',
    title1: '',
    subtitle1: 'Describe a feature or step of the process here.',
    title2: '',
    subtitle2: 'Describe a feature or step of the process here.',
    title3: 'Example Feature',
    subtitle3: 'Describe a feature or step of the process here.',
    paragraph1:
      'The imported data is then mapped over to dynamically generate content within the Slider component, enabling easy display of project information. This method works well for small-scale projects with fixed content but can be extended to fetch dynamic data from an API if necessary.',
    paragraph2: '',
    paragraph3: '',
    paragraph4: '',
    paragraph5:
      'The website was built using Sass, leveraging its powerful features like grid layouts and mixins for a more efficient and maintainable design. The grid system ensures a flexible, responsive structure, while the mixins streamline repetitive styles, making the codebase more organized and scalable.',
    list1: [],
    list2: []
  },

  // BrainFlix
  {
    imageThumb: '/static/images/brainflix.jpg',
    imageUrl: '/static/images/brainflix.jpg',
    imageSmall: [
      '',
      '/static/images/brainflix-add-comment.jpg',
      '/static/images/brainflix-server.jpg'
    ],
    tags: ['React', 'React Router', 'Sass'],
    title: 'BrainFlix',
    subtitle: 'Youtube clone web app',
    fullDescription:
      'This app is built with React for the UI, using functional components and hooks for state and lifecycle management. It uses React Router for client-side routing and Axios to handle RESTful API requests from a local backend. ',
    description:
      'This application is built using React for the frontend, leveraging React Router for client-side routing.',
    buttonText: 'Go to Project',
    buttonLink: '/projects/3',
    buttonHref: '#',
    gitHub: 'https://github.com/psyout/felipe-gonzalez-brainflix',
    skills: ['Axios', 'RESTful API', 'Sass', 'Node', 'Express'],
    imageCaption1: '',
    imageCaption2: '',
    imageCaption3:
      'The comments section component reads comment data directly from the selected video object and maps through each comment to render it in a styled layout, with consistent structure and BEM naming conventions',
    imageCaption4:
      'Developed a server using Express.js, which handles API requests for retrieving and managing video data. The server uses static assets from a public directory and exposes RESTful endpoints under the /videos route, making it easy to interact with video content, including uploading, fetching, and displaying data on the Front-End',
    paragraph1:
      'This application is built using React for the frontend, leveraging React Router for client-side routing and dynamic URL-based video selection. It uses Axios to perform HTTP requests to a Node.js/Express backend API. The component structure is modular, with separate files for layout elements like Header, Hero, MainContent, and AsideContent, promoting reusability and maintainability. The app also manages video data using React’s useState and useEffect hooks, and ensures smoother user experience with features like useCallback for memoized fetching. Styling is handled using Sass, suggested by the use of BEM-style class names and structure.',
    paragraph2: '',
    paragraph3: '',
    paragraph4: '',
    list1: [],
    list2: []
  },

  // Bandsite Web
  {
    imageThumb: '/static/images/bandsite.jpg',
    imageUrl: '/static/images/bandsite.jpg',
    imageSmall: ['/static/images/bandsite-shows.jpg', '', ''],
    tags: ['Design', 'Development', 'HTML'],
    title: 'Bandsite Web',
    subtitle: 'Web platform for indie bands',
    description:
      'This website is built using a traditional front-end web development stack.',
    fullDescription:
      'This is a full-stack website that combines HTML5, CSS and JavaScript on the Front-End. It uses Axios (via CDN) to handle HTTP requests and interacts with a locally hosted Express API to manage features like the comments section.',
    buttonText: 'Go to Project',
    buttonLink: '/projects/4',
    buttonHref: 'https://felipegonzalez.io/bandsite/',
    skills: ['CSS3', 'JavaScript', 'Axios'],
    imageCaption1:
      'The back-end API handles GET and POST requests for user-submitted data, enabling dynamic rendering of comments and other interactive elements without relying on a front-end framework.',
    imageCaption2:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption3: '',
    imageCaption4: '',
    paragraph1:
      'The front-end structure follows semantic and accessible HTML markup, styled with BEM-named CSS classes compiled into a single stylesheet. The back-end API likely handles GET and POST requests for user-submitted data, enabling dynamic rendering of comments and other interactive elements without relying on a front-end framework.',
    paragraph2: '',
    paragraph3: '',
    paragraph4:
      'Instead of relying on a traditional fixed table, the content behaves like a table visually but is more mobile-friendly—Flexbox distributes space evenly, aligns text and buttons neatly, and enables stacking or wrapping of elements for smaller viewports, making the layout more versatile and accessible.',
    paragraph5:
      'This page is structured with clear, semantic sections that improve readability and maintainability. The shows list is designed as a flexible, responsive layout using CSS Flexbox, allowing each row of show details to adapt smoothly across screen sizes.',
    list1: [],
    list2: []
  }
]
