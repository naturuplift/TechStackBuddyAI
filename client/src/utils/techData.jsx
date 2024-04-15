import { FaDatabase, FaNode, FaReact, FaVuejs, FaAngular, FaCss3, FaServer } from 'react-icons/fa';

export const techCategories = {
    Databases: [
      { id: 'mongodb', icon: <FaDatabase />, label: 'MongoDB', color: '#47A248', description: 'A document-oriented NoSQL database used for high volume data storage.'},
      { id: 'SQL', icon: <FaDatabase />, label: 'SQL Server', color: '#F29111', description: 'A relational database management system developed by Microsoft.'},
      { id: 'PostgreSQL', icon: <FaDatabase />, label: 'PostgreSQL', color: '#336791', description: 'An open source relational database known for reliability and data integrity.'},
      { id: 'Redis', icon: <FaDatabase />, label: 'Redis', color: '#D82C20', description: 'An in-memory data structure store, used as a database, cache, and message broker.'},
      { id: 'MariaDB', icon: <FaDatabase />, label: 'MariaDB', color: '', description: 'A community-developed fork of MySQL intended to remain free under the GNU GPL.'},
      { id: 'OracleDatabase', icon: <FaDatabase />, label: 'Oracle Database', color: '', description: 'A multi-model database management system primarily designed for enterprise grid computing.'},
      { id: 'Firebase', icon: <FaDatabase />, label: 'Firebase', color: '', description: 'A platform developed by Google for creating mobile and web applications.'},
      { id: 'Cassandra', icon: <FaDatabase />, label: 'Cassandra', color: '', description: 'A highly scalable, high-performance distributed database designed to handle large amounts of data.'},
    ],
    Server: [
      { id: 'nodejs', icon: <FaNode />, label: 'Node.js', color: '#47A248', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.'},
      { id: 'Express', icon: <FaServer />, label: 'Express', color: '#47A248', description: 'A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'},
      { id: 'AngularServer', icon: <FaAngular />, label: 'Angular Universal', color: '', description: 'Server-side rendering (SSR) with Angular for rendering Angular applications on the server.'},
      { id: 'Django', icon: <FaServer />, label: 'Django', color: '', description: 'A high-level Python web framework that encourages rapid development and clean, pragmatic design.'},
    ],
    FrontEnd: [
      { id: 'React', icon: <FaReact />, label: 'React', color: '', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.'},
      { id: 'Vue', icon: <FaVuejs />, label: 'Vue.js', color: '', description: 'The Progressive JavaScript Framework that is approachable, versatile, and performant.'},
      { id: 'Angular', icon: <FaAngular />, label: 'Angular', color: '', description: 'A platform for building mobile and desktop web applications using Typescript/JavaScript and other languages.'},
    ],
    FrontendFW: [
      { id: 'Svelte', icon: <FaCss3 />, label: 'Svelte', color: '#47A248', description: 'A radical new approach to building user interfaces, where the work to generate the app happens at build time.'},
      { id: 'NextJs', icon: <FaCss3 />, label: 'Next.js', color: '#47A248', description: 'A React framework for production that provides hybrid static & server rendering, and route pre-fetching.'},
      { id: 'NuxtJs', icon: <FaCss3 />, label: 'Nuxt.js', color: '#47A248', description: 'An intuitive Vue framework that simplifies the development of universal or single-page Vue apps.'},
    ],
    CSSFrameWorks: [
      { id: 'Tailwind', icon: <FaCss3 />, label: 'Tailwind CSS', color: '#47A248', description: 'A utility-first CSS framework for rapidly building custom user interfaces.'},
      { id: 'Bootstrap', icon: <FaCss3 />, label: 'Bootstrap', color: '#47A248', description: 'The most popular HTML, CSS, and JS library in the world for building responsive, mobile-first projects on the web.'},
      { id: 'MaterialUI', icon: <FaCss3 />, label: 'Material-UI', color: '#47A248', description: 'A popular React UI framework that features designs based on Material Design.'},
    ],
  };