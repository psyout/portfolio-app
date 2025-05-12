export const projects = [
  // Vansippy
  {
    imageThumb: '/static/images/vansippy-card.jpg',
    imageUrl: '/static/images/vansippy-card.jpg',
    imageSmall: [
      '/static/images/vansippy-mobile.jpg',
      '/static/images/vansippy-mobile2.jpg'
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
      {
        title: 'React JS',
        description: 'Free and open-source front-end JavaScript library'
      },
      { title: 'Material UI', description: 'Prebuilt UI components' },
      {
        title: 'Node.js',
        description: 'Back-end runtime for handling API logic'
      },
      {
        title: 'Axios',
        description: 'Promise-based HTTP client for making API calls'
      },
      {
        title: 'Express',
        description: 'Lightweight server framework used with Node.js'
      },
      {
        title: 'Mapbox',
        description: 'Map rendering library with customizable, real-time maps'
      },
      {
        title: 'MongoDB',
        description: 'NoSQL database for storing venue, user and deal data'
      }
    ],

    list2: [
      { title: 'React JS', description: 'Used for web dev' },
      { title: 'Material UI', description: 'Used for web dev' },
      { title: 'Node.js', description: 'Used for web dev' },
      {
        title: 'Axios',
        description: 'Promise-based HTTP client for making API calls'
      },
      { title: 'Express', description: 'Used for web dev' },
      { title: 'Mapbox', description: 'Used for web dev' },
      { title: 'MongoDB', description: 'Used for web dev' }
    ],
    fullDescription:
      'A Full-Stack web application designed to help users easily discover and explore happy hour deals across Vancouver. Built using MERN (MongoDB, Express.js, React, and Node.js), VanSippy offers an intuitive user experience powered by real-time data, interactive map integration, and responsive UI components.',
    description:
      'Helping deal-seekers around Vancouver find Happy Hours at restaurants and bars close to them.',
    imageCaption1:
      'This app bridges that gap by bringing all those deals together into one sleek, user-friendly map interface — making it easier to plan your night or stumble into a new favorite spot.',
    imageCaption2:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption3:
      'This design achieves pixel-perfect responsiveness using Material UI and custom breakpoints, ensuring a seamless and flexible layout across devices. The grid system adapts content for different screen sizes, while images scale without distortion.',
    imageCaption4:
      'This Menu component is a part of the restaurant card, allowing users to toggle between the drinks and food menu sections. It uses conditional rendering to highlight the active section and disables inactive options based on the selected menu state. ',
    paragraph1:
      'The frontend is built with React and styled using Material UI for a clean, responsive interface. The backend uses Express.js and Node.js to handle API requests, while MongoDB stores all venue and deal information. Axios enables real-time data fetching, and Mapbox powers the interactive map and geolocation features.',
    paragraph2:
      'Together, these technologies create a seamless platform for users to find local deals quickly and visually, making the happy hour hunt both efficient and enjoyable.',
    paragraph3:
      'In the early stages of development, Vansippy relied on the Yelp Fusion API to fetch data for each bussiness. While it offered a quick way to populate content, it introduced several limitations, including restrictive rate limits, inconsistent data quality (especially for images) and limited control over the structure and filtering of returned data. These constraints made it difficult to deliver a reliable, focused user experience tailored around Happy Hour deals.',
    paragraph4:
      'To solve this, I built a custom Back-End API with Node.js and MongoDB. This gave me full control over the data schema, allowed real-time content updates, using CRUD and eliminated external dependencies. Now, the application supports more accurate, curated listings, improved performance and a flexible foundation for future features like an admin dashboard.',
    buttonText: 'Go to Project',
    gitHub: 'https://github.com/psyout/capstone-client',
    buttonVisit: 'View Site',
    buttonLink: '/projects/0',
    buttonHref: 'https://vansippy.com/',
    skills: ['React.js', 'MondoDB', 'MaterialUI']
  },

  // Transportes Moran
  {
    imageThumb: '/static/images/transportes-moran-card.jpg',
    imageUrl: '/static/images/transportes-moran-card.jpg',
    imageSmall: [
      '/static/images/vansippy-mobile.jpg',
      '/static/images/vansippy-mobile2.jpg'
    ],
    tags: ['Development', 'Design'],
    title: 'Transportes Moran',
    subtitle: 'Aggregate Solutions Co.',
    description:
      'Reliable Aggregate Manufacturing & Trucking Services for your construction needs.',
    fullDescription:
      'This website is a single-page application built with React and styled using SCSS for modular and maintainable styling. The project follows a component-based architecture, using custom components like Navbar, Hero, Projects, and Contact Form to organize and reuse interface elements efficiently. It leverages JavaScript (ES6+) for dynamic behavior and  use React Hooks for state and lifecycle management.',
    buttonText: 'Go to Project',
    buttonLink: '/projects/1',
    buttonHref: 'https://www.transportesmoran.cl/',
    gitHub: 'https://github.com/psyout/transportes-moran',
    skills: ['React.js', 'SCSS', 'JavaScript', 'Figma'],
    imageCaption1:
      'The Transportes Moran website uses a straightforward and lightweight tech stack focused on performance and usability',
    imageCaption2:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption3:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption4:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    title1: 'Example Feature',
    subtitle1: 'Describe a feature or step of the process here.',
    title2: 'Example Feature',
    subtitle2: 'Describe a feature or step of the process here.',
    title3: 'Example Feature',
    subtitle3: 'Describe a feature or step of the process here.',
    paragraph1:
      'This web app renders its data by statically importing an array of objects containing project details like title, body, and image. This approach eliminates the need for external API calls, resulting in a simple and fast component. The imported data is then mapped over to dynamically generate content within the Slider component, enabling easy display of project information. This method works well for small-scale projects with fixed content but can be extended to fetch dynamic data from an API if necessary.',
    paragraph2: '',
    paragraph3: '',
    paragraph4: ''
  },

  // Instock App
  {
    imageThumb: '/static/images/instock-card.jpg',
    imageUrl: '/static/images/instock-card.jpg',
    imageSmall: [
      '/static/images/vansippy-mobile.jpg',
      '/static/images/vansippy-mobile2.jpg',
      '/static/images/instock-mockup.jpg',
      '/static/images/instock-mockup-edit.jpg',
      '/static/images/instock-mockup-delete.jpg'
    ],
    tags: ['React', 'React Router', 'Express'],
    title: 'Instock Web App',
    subtitle: 'React-based Inventory Management System',
    description:
      'A modern and scalable Inventory Management System for a client.',
    fullDescription:
      'The InStock project was developed during a web development bootcamp as a collaborative group project. The goal was to deliver a modern and scalable Inventory Management System for a client. The project required working as an Agile team, following Scrum methodologies and using tools like JIRA, Figma, and Git/GitHub for efficient collaboration and project management.',
    buttonText: 'Go to Project',
    buttonLink: '/projects/2',
    buttonHref: '',
    skills: ['React.js', 'Node', 'Express', 'Postman', 'Figma'],
    imageCaption1:
      'When a new warehouse is added, the UI automatically updates if the list is rendered dynamically (e.g., using .map()). The new warehouse appears in the list as soon as it’s added to the data source, such as a state variable or database, without needing to reload the page.',
    imageCaption2:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption3:
      'When you edit a product, the form updates the local state with the new input. On submit, a PUT or PATCH request is sent to the backend with the updated data. If the request is successful, the backend responds with the updated product, and the UI state is refreshed, showing the changes instantly.',
    imageCaption4:
      'When deleting a product, a common visual error is that the item still appears in the UI even after it is been removed from the backend. This usually happens when the frontend state is not updated correctly after the delete action, or if the product list is not re-fetched to reflect the latest data.',
    paragraph1:
      'Designed with Agile and Scrum methodologies, it allows users to manage warehouses and inventory with features like add/edit/delete, dynamic search, filtering, and responsive design. The front end uses React, React Router, and BEM/SASS for styling, while the back end runs on Node.js, Express, MySQL, and Knex. All data interactions are handled through a RESTful API, and the system includes full form validation and real-time feedback for usability across devices.',
    paragraph5:
      "When a new warehouse is added, the UI updates dynamically, showing the new warehouse once it's added to the data source. This triggers state changes, re-renders, and actions like form resets. If the data is incomplete or invalid, validation errors may occur. When using MongoDB, an API call stores the data, and the UI fetches the updated list. Incorrect data structure or missing fields may cause errors in the app.",
    paragraph3: '',
    paragraph4: '',
    list1: [
      'Overview of warehouses and inventory levels per warehouse',
      'Overview of total inventory by inventory type',
      'Create / delete inventory or warehouses',
      'Edit inventory or warehouse details',
      'Search and filtering functionality to find specific warehouses or inventory',
      'Form validation when creating new or editing existing warehouses/inventory',
      'Responsive design so that the site responds to mobile, tablet, and desktop views'
    ]
  },

  // BrainFlix
  {
    imageThumb: '/static/images/vansippy-card.jpg',
    imageUrl: '/static/images/vansippy-card.jpg',
    imageSmall: [
      '/static/images/vansippy-mobile.jpg',
      '/static/images/vansippy-mobile2.jpg',
      '/static/images/instock-mockup.jpg',
      '/static/images/instock-mockup-edit.jpg'
    ],
    tags: ['Portfolio', 'Design', 'Tailwind'],
    title: 'BrainFlix',
    subtitle: 'Youtube clone web app',
    description:
      'A sleek and modern developer portfolio built with Next.js and Tailwind CSS.',
    buttonText: 'Go to Project',
    buttonLink: '/projects/3',
    buttonHref: 'https://vansippy.com/',
    skills: ['React.js', 'MondoDB', 'MaterialUI'],
    imageCaption1:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption2:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption3:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption4:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    paragraph1:
      'This web app renders its data by statically importing an array of objects containing project details like title, body, and image. This approach eliminates the need for external API calls, resulting in a simple and fast component. The imported data is then mapped over to dynamically generate content within the Slider component, enabling easy display of project information. This method works well for small-scale projects with fixed content but can be extended to fetch dynamic data from an API if necessary.',
    paragraph2: '',
    paragraph3: '',
    paragraph4: ''
  },

  //Bandsite web
  {
    imageThumb: '/static/images/vansippy-card.jpg',
    imageUrl: '/static/images/vansippy-card.jpg',
    imageSmall: [
      '/static/images/vansippy-mobile.jpg',
      '/static/images/vansippy-mobile2.jpg',
      '/static/images/instock-mockup.jpg',
      '/static/images/instock-mockup-edit.jpg'
    ],
    tags: ['Portfolio', 'Design', 'Tailwind'],
    title: 'Bandssite Web',
    subtitle: 'Bootcamp Project',
    description:
      'A sleek and modern developer portfolio built with Next.js and Tailwind CSS.',
    buttonText: 'Go to Project',
    buttonLink: '/projects/4',
    buttonHref: 'https://vansippy.com/',
    skills: ['React.js', 'MondoDB', 'MaterialUI'],
    imageCaption1:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption2:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption3:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    imageCaption4:
      'Use a caption IF the image is needed. Most images won’t BUT you can style like this. Line length should be about 10-12 words on average.',
    paragraph1:
      'This web app renders its data by statically importing an array of objects containing project details like title, body, and image. This approach eliminates the need for external API calls, resulting in a simple and fast component. The imported data is then mapped over to dynamically generate content within the Slider component, enabling easy display of project information. This method works well for small-scale projects with fixed content but can be extended to fetch dynamic data from an API if necessary.',
    paragraph2: '',
    paragraph3: '',
    paragraph4: ''
  }
]
