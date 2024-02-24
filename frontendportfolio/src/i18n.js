// i18n.js
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          languages: {
            English: "English",
            French: "French",
          },
          
          navBar: {
            Home: "Home",
            About: "About Me",
            Experience: "Experience",
            Projects: "Projects",
            Contact: "Contact Me",
            Footer :"Matthew Tan's Portfolio. All rights reserved"
          },
          homePage:{
            greeting: "Welcome To My Portfolio",
            type:" I am a software developer",
            scroll: "Scroll Down"
          },
          aboutMe: {
            greeting: "Hello! I'm {{firstName}} {{lastName}},",
            description:
              "I am a software developer who pursued a major in computer science at Champlain College. I've passionately honed my skills and collaborated on various projects with diverse teams.",
          },
          hobbies: {
            title: "Hobbies",
            description:
              "What I enjoy doing in my free time is playing video games since I have a passion for it, and I love watching anime, a Japanese form of entertainment that intrigues me.",
          },
          cv: {
            title: "My CV",
            bigTitle: "Curious to see my resume?",
            description:
              "Click the link below to download my CV:",
            download: "Download CV",
          },
          skill:{
            title: "Here are some of my skills"
          },
          footer: {
            contactInformation: "Contact Information",
            emailAddress: "matthew999099@gmail.com",
            phoneNumber: "+1 438 388 0273",
            followMe: "Follow Me",
            addressTitle: "Address",
            address: "Brossard, Quebec, Canada",
            footerBottom: "© 2024 Matthew Tan's Portfolio. All rights reserved.",
          },
          Experience: "My Experiences",
          experience: {
            job: "Job/Workplace",
            jobDescription: "This section provides information about my professional work experience.",
            exploreJob: "Explore Job Experience",
            class: "Class",
            classDescription: "This section contains details about my educational experiences completed at Cegep Champlain St-Lambert",
            exploreClass: "Explore Classes Taken",
            education: "Educations",
            educationDescription: "This section contains details about my school education.",
            exploreEducation: "My education",
          },
          work: {
            work: 'Work',
            jobTitle: 'Job Title',
            place: 'Place',
            location: 'Location',
            duration: 'Duration',
            status: 'Status',
            description: 'Description',
        
        },
        class: {
            classes: 'Classes',
            searchPlaceholder: 'Search by class name or teacher',
            searchSkill: 'Search by Skill:',
            allSkills: 'All Skills',
            searchSemester: 'Search by Semester:',
            allSemesters: 'All Semesters',
            semester: 'Semester {{semester}}',
            teacher: 'Teacher:',
            description: 'Description:',
            skills: 'Skills:',
          },
          education: {
            title: 'Education',
            institution: 'Institution',
            degree: 'Degree',
            major: 'Major',
            graduationYear: 'Graduation Year',
            diploma: 'Diploma',
            viewDiploma: 'HighSchool Diploma',
            comingSoon: '(DEC)Coming soon',
            viewClasses: 'View Classes:',
            exploreClassExperience: 'Explore Class Experience',
          },
          project: {
            title: 'Projects',
            searchPlaceholder: 'Search by project skill',
            searchLabel: 'Search by Project Type:',
            allTypes: 'All Types',
            teamwork: 'TEAMWORK',
            individual: 'INDIVIDUAL',
            name: 'Name',
            duration: 'Duration',
            description: 'Description',
            type: 'Type',
            skill: 'Skill',
            githubLink: 'GitHub Link',
          },
          contact: {
            title: 'Contact Me',
            formTitle: 'Contact Form',
            infoTitle: 'Contact Information',
            email: 'matthew999099@gmail.com',
            phoneNumber: '+1 438 388 0273',
            followTitle: 'Follow Me',
            addressTitle: 'Address',
            address: 'Brossard, Quebec, Canada',
          },
          form: {
            nameLabel: 'Your Name',
            emailLabel: 'Email',
            subjectLabel: 'Subject',
            messageLabel: 'Description',
            submitButton: 'Send Message',
          },    
        
    
      },
    },
      fr: {
        translation: {
          navBar: {
            Home: "Accueil",
            About: "À propos de moi",
            Experience: "Expérience",
            Projects: "Projets",
            Contact: "Me Contacter",
            Footer: "Portfolio de Matthew Tan. Tous droits réservés."
          },
          homePage:{
            greeting: "Bienvenue Sur Mon Portfolio",
            type:"Je suis un développeur de logiciels.",
            scroll: "Défiler vers le bas"
          },
          aboutMe: {
            greeting: "Bonjour! Je m'appelle {{firstName}} {{lastName}},",
            description:
              "Je suis un développeur de logiciels qui a suivi une majeure en informatique au Collège Champlain. J'ai perfectionné mes compétences avec passion et collaboré à divers projets avec des équipes variées.",
          },
          hobbies: {
            title: "Loisirs",
            description:
              "Ce que j'aime faire pendant mon temps libre, c'est jouer à des jeux vidéo car j'en ai la passion, et j'aime regarder des animes, une forme de divertissement japonaise qui m'intrigue.",
          },
          cv: {
            title: "Mon CV",
            bigTitle: "Curieux de voir mon CV ?",
            description:
              "Cliquez sur le lien ci-dessous pour télécharger mon CV:",
            download: "Télécharger le CV",
          },

          skill:{
            title: "Voici quelques-unes de mes compétences"
          },
          footer: {
            contactInformation: "Informations de contact",
            emailAddress: "matthew999099@gmail.com",
            phoneNumber: "+1 438 388 0273",
            followMe: "Suivez-moi",
            addressTitle: "Adresse",
            address: "Brossard, Québec, Canada",
            footerBottom: "© 2024 Portfolio de Matthew Tan. Tous droits réservés.",
          },
          Experience: "Mes Expériences",
          experience: {
            job: "Travail/Poste de travail",
            jobDescription: "Cette section fournit des informations sur mon expérience professionnelle.",
            exploreJob: "Explorer l'expérience professionnelle",
            class: "Cours",
            classDescription: "Cette section contient des détails sur mes expériences éducatives réalisées au Collège Champlain St-Lambert",
            exploreClass: "Explorer les cours suivis",
            education: "Éducations",
            educationDescription: "Cette section contient des détails sur ma formation scolaire.",
            exploreEducation: "Ma formation",
          },
          work: {
            work: 'Travail',
            jobTitle: 'Titre du travail',
            place: 'Lieu',
            location: 'Emplacement',
            duration: 'Durée',
            status: 'Statut',
            description: 'Description',

          },
          class: {
            classes: 'Cours',
            searchPlaceholder: 'Recherche par nom de cours ou enseignant',
            searchSkill: 'Recherche par compétence :',
            allSkills: 'Toutes les compétences',
            searchSemester: 'Recherche par semestre :',
            allSemesters: 'Tous les semestres',
            semester: 'Semestre {{semester}}',
            teacher: 'Enseignant :',
            description: 'Description :',
            skills: 'Compétences :',
          },
          education: {
            title: 'Éducation',
            institution: 'Institution',
            degree: 'Diplôme',
            major: 'Majeur',
            graduationYear: "Année d'obtention",
            diploma: 'Diplôme',
            viewDiploma: 'Diplome Etude Secondaire (DES)',
            comingSoon: '(DEC)Bientôt disponible',
            viewClasses: 'Voir les cours :',
            exploreClassExperience: "Explorer l'expérience des cours",
          },
          project: {
            title: 'Projets',
            searchPlaceholder: 'Recherche par compétence du projet',
            searchLabel: 'Recherche par type de projet :',
            allTypes: 'Tous les types',
            teamwork: 'ÉQUIPE',
            individual: 'INDIVIDUEL',
            name: 'Nom',
            duration: 'Durée',
            description: 'Description',
            type: 'Type',
            skill: 'Compétence',
            githubLink: 'Lien GitHub',
          },
          contact: {
            title: 'Me Contacter',
            formTitle: 'Formulaire de contact',
            infoTitle: 'Informations de contact',
            email: 'matthew999099@gmail.com',
            phoneNumber: '+1 438 388 0273',
            followTitle: 'Suivez-moi',
            addressTitle: 'Adresse',
            address: 'Brossard, Québec, Canada',
          },
          form: {
            nameLabel: 'Votre nom',
            emailLabel: 'Courriel',
            subjectLabel: 'Sujet',
            messageLabel: 'Description',
            submitButton: 'Envoyer le message',
          },
          languages: {
            English: "Anglais",
            French: "Français",
          },
      
    
          
        },
      },
    },
  });

export default i18next;
