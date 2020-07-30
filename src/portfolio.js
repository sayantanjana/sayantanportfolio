/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,  // Change this to false if you don't want Splash screen.
};


//Home Page
const greeting = {
	title: "Hey! I'm Sayantan",
	logo_name: "Sayantan Jana",
	nickname: "reefs_edge",
	subTitle:
		"An ambitious, zestful & persevering individual who is yearning to absorb as much knowledge and insights as possible.",
	resumeLink:
		"ddd",
	portfolio_repository: "https://github.com/sayantanjana/sayantanportfolio",
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/sayantanjana",
	linkedin: "https://www.linkedin.com/in/sayantan-jana/",
	gmail: "sjana.chan@gmail.com",
	gitlab: "https://gitlab.com/sayantanjana/",
	facebook: "https://www.facebook.com/sayantanjana.666/",
	twitter: "https://twitter.com/sjana666",
	//instagram: "https://www.instagram.com/sayantan_sj/",
    whatsapp: "https://wa.me/+917003182440"
};

const skills = {
  data: [
    {
      title: "Visualization, AI & ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Appealing graphs and charts for in-depth analysis",
        "⚡ Machine learning incorporating time series analysis, fraud detection & customer satisfaction",
        "⚡ Experience of working with Computer Vision and NLP projects"
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            backgroundColor: "transparent",
            color: "#E97627"
            
          }
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
            color: "#F2C811"
          }
        },  
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458"
          }
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        }
              
      ]
    },
    {
      title: "Front End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React ",
        "⚡ Setting up DNS & databases to host websites",
        //"⚡ Creating application backend in Node, Express & Flask"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
              backgroundColor: "transparent",
              color: "#777BB4"
          }
        },  
        /*{
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699"
          }
        },*/
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "My SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
              backgroundColor: "transparent",
              color: "#4479A1"
          }
        },  
        /*{
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB"
          }
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399"
          }
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B"
          }
        }*/
      ]
    },
    {
      title: "Cloud Platforms",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Setting up IoT, serverless application on GCP and AWS",
        "⚡ Deploying machine laerning models on cloud",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6"
          }
        },
        {
          skillName: "IBM",
          fontAwesomeClassname: "simple-icons:ibm",
          style: {
              backgroundColor: "transparent",
              color: "#054ADA"
          }
        },  
        /*{
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28"
          }
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791"
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
          }
        },*/
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5"
          }
        }
      ]
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing enthralling user interface for website",
        "⚡ Creating logo design and animating images",
        //"⚡ Creating the flow of application functionalities to optimize user experience"
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2"
          }
        },
        {
          skillName: "Adobe Photshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#26C9FF"
          }
        },  
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E"
          }
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00"
          }
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#ffffff"
          }
        }
      ]
    }
  ]
};
// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#1F8ACB"
      },
      profileLink: "https://www.coursera.org/user/d61f9ea55278102eff638eefcca303bc"
    },
    {
      siteName: "Gitlab",
      iconifyClassname: "simple-icons:gitlab",
      style: {
        color: "#FCA121"
      },
      profileLink: "https://gitlab.com/sayantanjana/"
    },  
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF"
      },
      profileLink: "https://www.kaggle.com/sjleshrac"
    },
    {
      siteName: "Codepen",
      iconifyClassname: "simple-icons:codepen",
      style: {
        color: "#ffffff"
      },
      profileLink: "https://codepen.io/sj-leshrac"
    },    
  ]
}

const degrees = {
  degrees : [
    {
      title: "Welingkar Institute of Management Development & Research",
      subtitle: "PGDM in Research & Business Analytics",
      logo_path: "weschool_logo.png",
      alt_name: "WeSchool",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have gone through the subjects such as Statistics, Ecomomics, BFSI, Python etc & taken Finance as specialization in 2nd year.",
        "⚡ I have participated in several hackathons, case study competitions & volunteered in college events. ",
        "⚡ Apart from this, I have completed courses on Data Science, Deep Learning, Cloud Architecture on Coursera platform."
      ],
      website_link: "https://www.welingkar.org/"
    },
    {
      title: "Techno India, Saltlake",
      subtitle: "B.Tech. in Electrical Engineering",
      logo_path: "techno_logo.png",
      alt_name: "Techno Saltlake",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic electrical engineering subjects like Electrical Machines, Control System, Circuit Theory etc.",
        "⚡ I have built several small scale electrical projects like Automatic Door Lock System using Arduino UNO. ",
        "⚡ I was a core committee member of EDGE-Cyber Crusade(DOTA 2) which is a professional & competitve gaming event in Kolkata. "
      ],
      website_link: "https://www.ticollege.ac.in/"
    }  
  ]
}

const certifications = {
	certifications: [
		{
			title: "Data Science Professional",
			subtitle: "IBM ",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/6DBT6TCCK8GK",
			alt_name: "IBM",
			color_code: "#1b397d"
		},
		{
			title: "Deep Learning Specialization",
			subtitle: "DeepLearning.ai",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/QKEJVJ37J35S",
			alt_name: "deeplearning.ai",
			color_code: "#c2cfbe"
		},
		{
			title: "AWS Fundamentals Specialization",
			subtitle: "AWS",
			logo_path: "aws_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/AEYVQK2V9QP4",
			alt_name: "AWS",
			color_code: "#000000"
		},
		{
			title: "ML with Tensorflow Specialization",
			subtitle: "GCP",
			logo_path: "ml_gcp.png",
			certificate_link:
				"https:",
			alt_name: "GCP",
			color_code: "#2662a6"
		},
        {
			title: "Computer Vision: Gluon CV",
			subtitle: "AWS",
			logo_path: "aws_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/records/BKSEVMBH86XL",
			alt_name: "AWS",
			color_code: "#000000"
		},
		{
			title: "Practical Time Series Analysis",
			subtitle: "State University of New York",
			logo_path: "suny_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/records/4MN7WF2NVZ9M",
			alt_name: "SUNY",
			color_code: "#000000"
		},	
		{
			title: "Introduction to Cloud Identity",
			subtitle: "Google Cloud Platform",
			logo_path: "gcp_logo2.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/records/HHCL4VXGELTA",
			alt_name: "Google",
			color_code: "#c2cfbe"
		},
		{
			title: "AWS Machine Learning",
			subtitle: "AWS",
			logo_path: "aws_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/records/BNND63FWLNGC",
			alt_name: "deeplearning.ai",
			color_code: "#000000"
		},
		{
			title: "Industrial IoT",
			subtitle: "GCP",
			logo_path: "gcp_logo2.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/records/LDBE4ZJWTWXQ",  
			alt_name: "GCP",
			color_code: "#c2cfbe"
		},
		{
			title: "Chatbot with Dialoflow",
			subtitle: "GCP",
			logo_path: "gcp_logo2.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/records/QGN5EDWL4U4K",
			alt_name: "GCP",
			color_code: "#c2cfbe"
		},
		{
			title: "ML for Business Professionals",
			subtitle: "GCP",
			logo_path: "gcp_logo2.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/records/RDE9GB7Y3UUJ",
			alt_name: "NPTEL",
			color_code: "#c2cfbe"
		},
		{
			title: "AI apps with Azure",
			subtitle: "Learnquest",
			logo_path: "azure_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/records/DRHTDHBZPYPZ",
			alt_name: "GCP",
			color_code: "#c2cfbe"
		}
	]
};


// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Internship and Hackathons",
	description:
		"I have worked with a reputed insurance company as a management trainee. I also participated in a couple of hackathons. ",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Internship",
			experiences: [
				{
					title: "General Management Intern",
					company: "IDBI Federal Life Insurance",
					company_url: "https://www.idbifederal.com/",
					logo_path: "idbi_logo.png",
					duration: "May - June 2020",
					location: "Kolkata, West Bengal",
					description:
						"As a general management trainee I have done on market research and product sales. My research topic was to analyse the perception of people regarding various investment avenues with respect to life insurance",
					color: "#1eb59c",
				}
				
			],
		},
		{
			title: "Hackathons",
			experiences: [
				{
					title: "World Hackathon Day",
					company: "Israel Hackathon",
					company_url: "https://worldhackathonday.com/",
					logo_path: "israelhack_logo.png",
					duration: "May 2020",
					location: "Online",
					description:
						"Pitched a solution as Resfeber app for improving travel through airport considering safety and health using AI,Navigating by Augmented reality, thermal sensing,smart wearable all connected through the app having universal database of airports. Video Link: https://youtu.be/2kkmKITzzSk",
					color: "#ee3c26",
				},
				{
					title: "Samadhan Contest",
					company: "MHRD",
					company_url:
						"https://mic.gov.in/samadhan/",
					logo_path: "samadhan_logo.png",
					duration: "April 2020",
					location: "Online",
					description:
						"Provided a solution that can be used to solve the current issue faced by the Indian government in keeping watch on people breaking lockdown in certain areas thus putting everyone in danger by voilating social distance norms. Video Link: https://youtu.be/fp114imobG0",
					color: "#e50606",
				},
			],
		},
	],
};

// Projects Page
const projectsHeader = {
	title: "Projects",
	description:
		"Most of my projects are centered around machine learning and deep learning. Currently I am working on website development using html, css & reactjs.",
	avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
	contactSection: {
		title: "Contact Me",
		profile_image_path: "sj1.jpg",
		description:
			"Want to tell me a secret?  Don't hesitate to message me.",
	},
//	blogSection: {
//		title: "Blogs",
//		subtitle:
//			"For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
//		link: "https://ashutoshhathidara.wordpress.com",
//		avatar_image_path: "blogs_image.svg",
//	},
	addressSection: {
		title: "Address",
		subtitle:
			"Vill- Chandrapur, P.O.- Bagnan, Dist - Howrah, 711303, West Bengal",
		avatar_image_path: "address_image.svg",
		location_map_link: "https://goo.gl/maps/8Jk2YE2PodxzwirD9",
	},
	phoneSection: {
		title: "Phone Number",
		subtitle: "+91 7003182440",
	},
};

export {
	settings,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	experience,
	projectsHeader,
	contactPageData,
};
