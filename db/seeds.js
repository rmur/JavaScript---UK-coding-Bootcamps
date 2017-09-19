use codeBootcamps;
db.dropDatabase();
db.bootcamps.insert(
[
  {
    name: "CodeClan",
    website: "https://codeclan.com/",
    logo: "https://i2.wp.com/codeclan.com/wp-content/uploads/2016/05/CodeClan-Horizontal-RGB.png?fit=869%2C320&ssl=1",
    locations: [
      {
        city: "Edinburgh", 
        lat: 55.9470, 
        lng: -3.2020, 
        address: "37 Castle Terrace, Edinburgh, EH1 2EL",
        costOfLiving: 330
      }, 
      {
        city: "Glasgow", 
        lat: 55.857044, 
        lng: -4.244319, 
        address: "Tontine, 20 Trongate G1 5NA",
        costOfLiving: 238
      }
      ],
    twitter: "https://twitter.com/CodeClanScot",
    price: [5000, 5000],
    languages: ["Ruby", "Java", "JavaScript"],
    lengthWeeks: 16,
    qualification: true,
    qualificationName: "PDA at SCQF Level 8",
    fullTime: true,
    partTime: true,
    remoteStudying: false,
    fundingOptions: ["Professional and Career Development Loans", "EdAid", "Oil & Gas Transition Training Fund"],
    entryRequirements: ["Interview"],
    details: "CodeClan offers a range of software development courses to help kick start your career in tech and deepen your digital expertise. Transform your career at CodeClan by learning to code in our 16 week software development course. You don’t need to be a mathematician or have any previous technical experience. All you need is a willingness to learn, a passion for technology and to think like a problem solver. Through our part-time learning options, you can add coding skills to your CV or build on your existing programming knowledge.",
    taster: true,
    depositAmount: 500,
    paymentOptions: ["Single", "Modular"],
    coreSkills: ["TDD", "HTML", "CSS", "NoSQL", "SQL", "React", "Ruby on Rails", "SOLID"]
  },
  {
    name: "Code Bootcamp",
    website: "http://www.codebootcamp.co.uk/",
    logo: "http://www.codebootcamp.co.uk/images/code-lab-block-logo.png",
    locations: [
      {
        city: "Belfast", 
        lat: 54.602357,  
        lng: -5.930034, 
        address: "6-10 William St, Belfast, BT1 1PR",
        costOfLiving: 197
      }
      ],
    twitter: "https://twitter.com/code_boot_camp",
    price: [8900],
    languages: ["JavaScript", "Python"],
    lengthWeeks: 12,
    qualification: true,
    qualificationName: "Diploma in Software Development",
    fullTime: true,
    partTime: true,
    remoteStudying: true,
    fundingOptions: [],
    entryRequirements: [],
    details: "The Diploma in Software Development is a full-stack intensive coding course. The course content is created and validated by tech-industry experts and academics who ensure we teach the most relevant, industry-validated course content - enhancing graduate employability. If you choose to complete this course in our Belfast Training Suite you can complete the qualification in 12 weeks of full time study. Alternatively, we offer a part-time online mentored option which can be completed over the course of a year. Upon successful completion of your course and projects, you will be awarded the Code Institute Full Stack Diploma in Software Development from the only accredited Coding Bootcamp in Europe.By undertaking our course, you will have developed the skills to attain your first role as a junior developer or advance in your current career. Designed with practical, hands-on coding in mind - students finish with a packed portfolio. Finally, graduates receive a digital diploma to display on LinkedIn.",
    taster: true,
    depositAmount: 0,
    paymentOptions: [],
    coreSkills: ["HTML", "CSS", "GitHub", "MongoDB", "NoSQL", "Agile"]
  },
  {
    name: "DevelopMe",
    website: "https://developme.training/",
    logo: "https://developme.training/wp-content/themes/developme-oct-2015/images/developme_logo.svg?x57272",
    locations: [
      {
        city: "Bristol", 
        lat: 51.443396,
        lng: -2.568024, 
        address: "Paintworks Central Trading Estate, Bath Rd, Bristol, BS4 3EH",
        costOfLiving: 453
      }
      ],
    twitter: "https://twitter.com/develop_me_uk",
    price: [7995],
    languages: ["JavaScript", "PHP"],
    lengthWeeks: 12,
    qualification: false,
    qualificationName: "",
    fullTime: true,
    partTime: true,
    remoteStudying: false,
    fundingOptions: ["Professional and Career Development Loans", "EdAid"],
    entryRequirements: [],
    details: "Develop Me’s Coding Fellowship is a hands-on, project driven, intensive 12 week course in web development. You’ll get to grips with all the technologies, tools, processes and skills you need to embark on a career as a web developer – whilst putting together a portfolio of real world project work; working in industry on a paid work placement and making some great contacts along the way. All of this will put you in the perfect position to get a job as a junior developer straight from graduation. We’ll even help you make that transition and put you in touch with our partner companies that are hiring at the time. Kick start your career in tech – learn to code in just 12 weeks!",
    taster: false,
    depositAmount: 500,
    paymentOptions: [],
    coreSkills: ["HTML", "CSS", "React", "jQuery", "Sass", "User Experience", "UX", "MVC", "Laravel", "Databases", "APIs", "Git", "Vagrant", "Gulp", "Testing", "Agile", "WordPress", "Drupal", "Full Stack"]
  },
  {
    name: "Mums in Tech",
    website: "https://www.mumsintechnology.co.uk/",
    logo: "https://static1.squarespace.com/static/5849382c1b631b603005e5fc/t/59303f3f15cf7d726f5d2127/1505298337580/?format=1500w",
    locations: [
      {
        city: "London", 
        lat: 51.523926,
        lng: -0.083789, 
        address: "Rise London, 41 Luke St, London, EC2A 4DP",
        costOfLiving: 459
      },
      {
        city: "London", 
        lat: 51.514256, 
        lng: -0.225857, 
        address: "Huckletree West, 191 Wood Ln, White City, London, W12 7FP",
        costOfLiving: 459
      }
      ],
    twitter: "https://twitter.com/MumsinTech",
    price: [500],
    languages: [],
    lengthWeeks: 7,
    qualification: false,
    qualificationName: "",
    fullTime: false,
    partTime: true,
    remoteStudying: false,
    fundingOptions: [],
    entryRequirements: [],
    details: "Learn how to write basic code – a skill that is becoming indispensable in the modern workplace – and build a solid understanding of the digital landscape through this comprehensive introductory course.",
    taster: false,
    depositAmount: 0,
    paymentOptions: [],
    coreSkills: ["Trello", "JIRA", "Github", "Slack"]
  }, 
  {
    name: "Le Wagon",
    website: "https://www.lewagon.com/",
    logo: "https://secure.meetupstatic.com/photos/event/b/3/6/9/global_447945929.jpeg",
    locations: [
      {
        city: "London",
        lat: 51.521303, 
        lng: -0.076693, 
        address: "Frizzell House, 14-22 Elder St, London, E1 6BT",
        costOfLiving: 459
      }
      ],
    twitter: "https://twitter.com/lewagonlondon?lang=en",
    price: [6500],
    languages: ["Ruby", "JavaScript"],
    lengthWeeks: 9,
    qualification: false,
    qualificationName: "",
    fullTime: true,
    partTime: false,
    remoteStudying: false,
    fundingOptions: ["Professional and Career Development Loan"],
    entryRequirements: [],
    details: "Le Wagon is rated 1st coding bootcamp in the world according to Coursereport and Switchup. We have taught 98 batches (that's more than 1750 students!) and our program has evolved each time to reach perfection. We believe building a great curriculum takes time and it took us nearly 3 years to design the FullStack program. It is our longstanding experience that makes our program so efficient. You will learn in 2 months what you would have learned in 2 years.",
    taster: false,
    depositAmount: 0,
    paymentOptions: ["Single"],
    coreSkills: ["Bootstrap", "HTML", "CSS", "SQL", "React", "Ruby on Rails"]
  },
  {
    name: "Founders and Coders",
    website: "https://foundersandcoders.com",
    logo: "https://media.licdn.com/media/p/8/005/0a3/300/0f370ec.png",
    locations: [
      {
        city: "London",
        lat: 51.529485, 
        lng: -0.042247, 
        address: "14 Palmers Rd, London E2 0SY",
        costOfLiving: 459
      }
      ],
    twitter: "https://twitter.com/founderscoders",
    price: [0],
    languages: ["JavaScript"],
    lengthWeeks: 16,
    qualification: false,
    qualificationName: "",
    fullTime: true,
    partTime: false,
    remoteStudying: false,
    fundingOptions: [],
    entryRequirements: ["Interview"],
    details: "We have graduated more than 180 students on our full-time programmes in London and Nazareth. Over the last two years, more than 90% of our graduates have gone on to work in software or a related field. We believe that high quality education should be accessible to everyone. Our students continue to be involved with our programme long after they graduate. With their support and the work of the broader Founders & Coders community, we continue to offer our programmes for free at the point of delivery.",
    taster: false,
    depositAmount: 0,
    paymentOptions: [],
    coreSkills: ["Full Stack", "HTML", "CSS", "Git", "TDD", "PostgreSQL", "Hapi", "Node.js"]
  },
  {
    name: "We Got Coders",
    website: "https://www.wegotcoders.com/",
    logo: "https://www.wegotcoders.com/assets/logos/home_logo-7887ab7b59843a27ba312e13f4d6567b807345a6feeb8f40b81b2a9a44b33046.png",
    locations: [
      {
        city: "Hertfordshire",
        lat: 51.755301, 
        lng: -0.009830, 
        address: "Yewlands House, Hoddesdon EN11 8BX",
        costOfLiving: 260
      },
      {
        city: "Nottingham", 
        lat: 52.949834, 
        lng: -1.186656, 
        address: "Triumph Rd, Nottingham NG8 1DH",
        costOfLiving: 264
      }
      ],
    twitter: "https://twitter.com/wegotcoders",
    price: [8000],
    languages: ["Ruby", "Javascript"],
    lengthWeeks: 14,
    qualification: false,
    qualificationName: "",
    fullTime: true,
    partTime: true,
    remoteStudying: true,
    fundingOptions: ["Professional and Career Development Loan"],
    entryRequirements: ["Interview", "Code Test"],
    details: "We Got Coders is a different kind of coding bootcamp. We’re a creative community of coders, sharing skills via an intensive, live-in training programme that’s focused on kickstarting your career in web development. Learn to code, become a web developer and get employed.",
    taster: false,
    depositAmount: 0,
    paymentOptions: ["Single", "Modular"],
    coreSkills: ["SQL", "HTML", "CSS", "Ruby on Rails", "Full Stack"]
  },
  {
    name: "Mayden Academy",
    website: "https://maydenacademy.co.uk/",
    logo: "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2934/s300/maydenacademylogo.png",
    locations: [
      {
        city: "Bath", 
        lat: 51.3748, 
        lng: -2.3495, 
        address: "1 Widcombe Cres, Bath BA2 6AH",
        costOfLiving: 290
      }
      ],
    twitter: "https://twitter.com/maydentweets",
    price: [8000],
    languages: ["PHP", "JavaScript"],
    lengthWeeks: 16,
    qualification: true,
    qualificationName: "Zend Certified PHP Engineer",
    fullTime: true,
    partTime: false,
    remoteStudying: false,
    fundingOptions: ["Paying Back Course fees after empolyment by deducting 10% off salary"],
    entryRequirements: ["Interview"],
    details: "Learn the fundamentals of coding, software design and agile project management in 16 weeks. Mayden Academy was created by a leading tech firm in the South West. We know exactly what employers are looking for, and our intensive training will get you there.",
    taster: true,
    depositAmount: 0,
    paymentOptions: ["Single"],
    coreSkills: ["HTML", "CSS","SQL","OOP","TDD", "MVC & PHP Frameworks","Node.js","Zend Certification"]
  },
  {
    name: "North Coders",
    website: "https://northcoders.com/",
    logo: "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3760/s200/north-coders-logo.png",
    locations: [
      {
        city: "Manchester", 
        lat: 53.4861, 
        lng: -2.2398, 
        address: "Federation House, Federation Street, Manchester M4 2AH",
        costOfLiving: 291
      }
      ],
    twitter: "https://twitter.com/northcoders",
    price: [6000],
    languages: ["JavaScript"],
    lengthWeeks: 12,
    qualification: true,
    qualificationName: "Zend Certified PHP Engineer",
    fullTime: true,
    partTime: true,
    remoteStudying: false,
    fundingOptions: ["Professional and Career Development Loan"],
    entryRequirements: ["Interview"],
    details: "North Coders is the coding bootcamp for people like you, who are looking to launch a software engineering career in the North of England. Our Full-Time 12-week full-stack software engineering bootcamp is designed to teach you all the skills you’ll need to succeed as an entry-level software developer and to develop even further. We teach solid fundamentals through a curriculum based on exciting, cutting-edge technologies and we do it in an environment that makes learning fun. We also run a highly flexible 24-week Part-Time bootcamp covering the same content as our Full-Time course, designed to fit around your life. After graduation, Northcoders provides career development support and connects you with our network of Northern tech employers to ensure that you land your first job as a software developer.",
    taster: true,
    depositAmount: 0,
    paymentOptions: ["Single"],
    coreSkills: ["Node.js","MondoDB","SQL", "React", "React-Router", "Redux"]
  },
  {
    name: "Coder-Space",
    website: "https://coderspace.co.uk/",
    logo: "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3479/s200/coder-space-logo.png",
    locations: [
      {
        city: "Liverpool", 
        lat: 53.402946, 
        lng: -2.979761, 
        address: "Unit 301, Vanilla Factory 39 Fleet St, Liverpool L1 4AR",
        costOfLiving: 294
      }
      ],
    twitter: "https://twitter.com/coderspaceuk",
    price: [4000],
    languages: ["JavaScript", "PHP"],
    lengthWeeks: 13,
    qualification: false,
    qualificationName: "",
    fullTime: true,
    partTime: false,
    remoteStudying: false,
    fundingOptions: ["Coder Space Loan","EdAid", "QardHasan", "INDIEGOGO", "Coder Space Scholarship"],
    entryRequirements: ["Interview"],
    details: "We are an in-person, 13-week coding boot camp. Come and join us, and people like you, to learn to code on an exciting and challenging course that will give you all the skills for your future tech career. We work with some of the best businesses and recruiters in the North West and we have 100 vacancies to fill in the next 12 months.",
    taster: true,
    depositAmount: 0,
    paymentOptions: ["Single"],
    coreSkills: ["HTML", "CSS", "NodeJS", "SQL", "NoSQL", "Lavarel", "TDD", "Git"]
  },
  {
    name: "Codez Academy",
    website: "http://www.codezacademy.co.uk/",
    logo: "http://www.codezacademy.co.uk/assets/img/logo/logo.png",
    locations: [
      {
        city: "Caerphilly", 
        lat: 51.5712, 
        lng: -3.2039, 
        address: "Tramshed Tech, Pendyris St, Cardiff, CF11 6BH",
        costOfLiving: 210
      }
      ],
    twitter: "https://twitter.com/CodezAcademy",
    price: [0],
    languages: ["JavaScript"],
    lengthWeeks: 12,
    qualification: false,
    qualificationName: "",
    fullTime: true,
    partTime: false,
    remoteStudying: false,
    fundingOptions: [],
    entryRequirements: ["Interview", "You have to be unemployed"],
    details: "Who are we? We are your opportunity to learn new skills, develop your digital know-how, and build your online presence from the ground up. We provide a range of courses from Advanced Evening Courses to personalised One-to-One sessions for all ages.Why learn to code? Code is the foundation of all things digital. Knowing how to code will give you access to build anything from websites to apps to games and programmes. Not only are there endless possibilities to what you can build, learning to code will give you the opportunity to enter into a modern and rewarding career.Why Codez Academy? Our range of courses focus on hands-on learning in an interactive and immersive environment. Our tutors work closely with each student to ensure they get the very most out of their learning experience and come away with practical and relevant skills.Take a look at what we have to offer and #GetCoding!",
    taster: false,
    depositAmount: 0,
    paymentOptions: [],
    coreSkills: ["HTML", "CSS", "Adobe Suite"]
  },
  {
    name: "Makers Academy",
    website: "http://www.makersacademy.com/",
    logo: "https://pbs.twimg.com/profile_images/3087236754/91e379b7e0006d38ee0526946a38a1ea_400x400.png",
    locations: [
      {
        city: "London", 
        lat: 51.5173, 
        lng: -0.0733, 
        address: "50-52 Commercial St ,London E1 6LT ,United Kingdom",
        costOfLiving: 459
      }
      ],
    twitter: "https://twitter.com/makersacademy",
    price: [8000],
    languages: ["Ruby", "Javascript"],
    lengthWeeks: 12,
    qualification: false,
    qualificationName: 0,
    fullTime: true,
    partTime: false,
    remoteStudying: false,
    fundingOptions: ["PCDL, EDAID"],
    entryRequirements: ["Interview", "Practical Test"],
    details: "Makers Academy is Europe's leading Web Developer bootcamp. With our help, you'll learn the principles of software craftsmanship and we'll also help you get your first job. We've graduated over 1000 students into their dream jobs as junior developers.",
    taster: true,
    depositAmount: 800,
    paymentOptions: [],
    coreSkills: ["Git", "GitHub", "TDD", "Sinatra", "HTML", "CSS","Heroku", "Capybara", "DataMapper", "SQL", "jQuery", "AJAX", "Ruby on Rails"] 
  },
  {
    name: "General Assembly",
    website: "https://generalassemb.ly/locations/london",
    logo: "http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png",
    locations: [
      {
        city: "London", 
        lat: 51.515198, 
        lng: -0.072355, 
        address: "GA London, The Relay Building, 1st Floor, 114 Whitechapel High Street, London, E1 7PT",
        costOfLiving: 459
      } 
      ],
    twitter: "https://twitter.com/GA",
    price: [8000],
    languages: ["Ruby", "JavaScript"],
    lengthWeeks: 14,
    qualification: false,
    qualificationName: "",
    fullTime: true,
    partTime: true,
    remoteStudying: true,
    fundingOptions: ["Single", "Future Finance"],
    entryRequirements: [],
    details: "We teach the skills you need to kickstart your career as a developer and a lifelong learner. From programming fundamentals to launching full-stack web apps, you'll learn to solve problems with code while applying industry best practices in a collaborative environment.",
    taster: true,
    depositAmount: 0,
    paymentOptions: [],
    coreSkills: ["Ruby on Rails", "CSS", "Node.js"]
  },
  {
    name: "Digital Unicorn",
    website: "https://digitalunicorn.co.uk",
    logo: "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1735/s300/digital-unicorn-logo.jpg",
    locations: [
      {
        city: "London", 
        lat: 51.517700, 
        lng: -0.109410, 
        address: "30 Holborn, London, EC1N 2LX, United Kingdom",
        costOfLiving: 459
      }
      ],
    twitter: "https://twitter.com/digunicorn",
    price: [8000],
    languages: ["JavaScript", "PHP"],
    lengthWeeks: 12,
    qualification: false,
    qualificationName: "",
    fullTime: true,
    partTime: false,
    remoteStudying: false,
    fundingOptions: [],
    entryRequirements: [],
    details: "Learn and gain work experience as you work on real-life projects using the infrastructure and processes of a real IT company. Showcase your talent and stand out to employers — everything you need to land the job.",
    taster: false,
    depositAmount: "",
    paymentOptions: ["Single"],
    coreSkills: ["HTML", "CSS", "jQuery", "Node.js", "Symphony", "SQL", "NoSQL", "IoT fundamentals", "Amazon Cloud"]
  },
  {
    name: "Just It",
    website: "https://www.justit.co.uk/",
    logo: "https://www.justit.co.uk/wp-content/uploads/2016/02/Just-it-15th-anniversary-logo-230.png",
    locations: [
      {
        city: "London", 
        lat: 51.512332, 
        lng: 0.075323, 
        address: "2nd Floor, St. Clare House, 30-33 Minories, London, EC3N 1DD",
        costOfLiving: 459
      }
      ],
    twitter: "https://twitter.com/JustITTR",
    price: [0],
    languages: ["Visual C#", "JavaScript"],
    lengthWeeks: 13,
    qualification: false,
    qualificationName: "",
    fullTime: true,
    partTime: false,
    remoteStudying: false,
    fundingOptions: ["Pay as you earn", "Graduate pay as you earn", "Single", "Education loan"],
    entryRequirements: [],
    details: "",
    taster: true,
    depositAmount: 0,
    paymentOptions: [],
    coreSkills: []
  }
  ]);