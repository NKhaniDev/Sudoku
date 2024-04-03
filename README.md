# Mech 3D

## Code Institute - Second Milestone Project: JavaScript essentials Portfolio Project.

This website was developed to show my ability to work with javascrip and DOM.


Sudoku is a popular game that helps people keep their minds busy during their spare time.


# Table of Contents
- [Mech3D](#https://nkhanidev.github.io/Mech3D/)
  - [Code Institute - First Milestone Project: User Centric Frontend Development.](#code-institute---first-milestone-project-user-centric-frontend-development)
- [Table of Contents](#table-of-contents)
  - [Demo](#demo)
    - [A live demo to the website can be found here](#a-live-demo-to-the-website-can-be-found-here)
  - [UX](#ux)
  - [User stories](#user-stories)
    - [Strategy](#strategy)
    - [Scope](#scope)
    - [Structure](#structure)
    - [Skeleton](#skeleton)
  - [Technologies](#technologies)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement](#features-left-to-implement)
  - [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Bugs](#bugs)
  - [Deployment](#deployment)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgements](#acknowledgements)

## Demo

![Website look on different devices](assets/README-assets/demo.png)

### A live demo to the website can be found [here](https://nkhanidev.github.io/Mech3D/)


## UX
This website is designed with two key user groups in mind: research institutes and mechanical companies.
The site is focused on simplicity and ease of navigation for the user's main focus areas on my resume.

## User stories
Enhancing Engineering Solutions with Mech3D

User: As a project manager at a mechanical engineering company, I want to partner with Mech3D for their specialized engineering services, 
So that we can leverage their expertise in CAD design, prototype development, and full-scale manufacturing to innovate and streamline our product development process.


### Strategy
The goal is to make a well-functioning professional servise website. The focus was on making the design both user-friendly and creative.

### Scope
The Mech3D website showcases a platform aimed at providing specialized services in CAD design, prototype development, and manufacturing within the mechanical engineering sector. It targets engineering firms, project managers, and innovators looking to enhance their product development process through advanced 3D modeling and printing technologies. The site likely serves as a portfolio and contact point for obtaining Mech3D's expertise in bringing engineering projects from conceptualization to reality.

### Structure
The Mech3D website has a single, long, scrolling page design. My structure features a fixed top navigation that connects the user to each of the sections from anywhere on the page. 

**Website Sections:**
1. **_Home / Landing page:_** A simple introduction that presents the overarching concept of the robot, giving users an understanding of what this website offers.
2. **_Statistics:_** Show the previous number of customers and historical experience of the company.
3. **_About:_** A brief summary of the technology, the dedicated team, and why Mech3D is the right platform for customers.
4. **_services:_** Explain the scope of Mech3D in 3 categories.
5. **_Contact:_** A contact page that features basic contact information for users interested in collaborating with Mech3D.
6. **_Footer:_** This is not the main section of the website but rather an ending to the website with social media links.
### Skeleton
The website is designed to be clear and simple. 

**Wireframe**
The wireframe creation utilized Balsamiq, refined under mentorship in its initial draft. Designed as a unified scrolling site, it emphasized distinct sections akin to individual pages, interconnected through navigational elements.



## Technologies
1. HTML - To create a basic site
2. CSS - To create a nice, standout front-end and to give a great user experience


## Features
### Existing Features
* **Navigation Bar**
  - The page features a top-fixed navigation bar, with the logo on the left linking to the home page. 
  - Navigation options are aligned to the right, linking to various sections within the same page, including Home, Services, About, and Contact.
  - The design ensures the text color contrasts with the background for readability, and a hover effect highlights the currently viewed section, enhancing user experience.


![navigation_bar](assets/README-assets/header.png)


* **Home**
  - The layout of this section transitions fluidly from a horizontal row on larger displays to a vertical column on smaller screens, ensuring a versatile and user-friendly experience.
  - To the left, an engaging narrative unfolds, detailing Mech3D's broad capabilities and visionary approach, encapsulated in an abstract overview. This segment gracefully concludes with a steadfast "Learn More" button, directing users to services section for further exploration.
  - On the right, page feature a strikingly large, transparent robotic arm. This piece stands as a testament to the innovative spirit of Mech3D, showcasing the advanced technological prowess available to users.

  
![home_section](assets/README-assets/home.png)


* **statistics**
  * It is a static bar without any links, but it displays the number of customers and the duration of Mech3D's service.
  

![statistics-section](assets/README-assets/statistics.png)


- **About**
  * This section of the Mech3D website outlines the mission, vision, and core values of the organization. It emphasizes its commitment to innovation in the field of mechanical engineering, highlighting expertise in 3D modeling and printing technologies. The section also showcases the team's passion for delivering high-quality, efficient solutions tailored to meet the specific needs of their clients, reflecting their dedication to excellence and customer satisfaction.

![education_section](assets/README-assets/about.png)


- **Service**
  - The Service section of the Mech3D website details the range of engineering services they offer, focusing on their proficiency in 3D modeling, CAD services, prototype development, and mechanical engineering consulting. It underscores their commitment to leveraging advanced technology to deliver precise, efficient solutions tailored to each client's needs.

![skills_section](assets/README-assets/serivices.png)


- **Contact**
  - The contact section of the Mech3D website is designed to facilitate easy communication between potential clients or collaborators and the Mech3D team. This section includes a name and email address, as well as a message box to send inquiries.

![contact_section](assets/README-assets/contact.png)


- **Footer**
  - This section includes the social media links through which users can reach the news and activities of the Mech3D.

![contact_section](assets/README-assets/footer.png)


### Features Left to Implement
In the future, 
* I would like to introduce a section for custom CAD design for customers, where they can sign up and create their designs online.
* The website's performance needs to be improved.
* I need to create much better pictures to provide deeper insight into what Mech3D is capable of doing.


## Testing
* The website has been thoroughly tested across various platforms, including popular web browsers like Chrome, Firefox, and Microsoft Edge, as well as on mobile devices using browsers such as Samsung's on a Galaxy A33. It has been verified for responsiveness across different screen sizes using devtools, ensuring that navigation and key sections like navigation, home, about, services, and Contact are accessible and user-friendly. Additionally, the site's form functionality has been confirmed, requiring input in all fields, validating email addresses, and ensuring submit button operate as intended.

### Validator Testing
* **HTML**
  No errors were returned when passing through the official [W3C validator](assets/README-assets/html-validator.png)

* **CSS**
  No errors were found when passing through the official [(Jigsaw) validator](assets/README-assets/W3C.png)
  
* **Accessibility**
  I confirmed that the colors and fonts chosen are easy to read and accessible by running it through [Lighthouse DevTools](assets/README-assets/accessibility.png)

### Bugs
* **Solved bugs**

 Several bugs were experienced during development; here are some examples:
  * I used three IDs with the same attribute.
  * Responsiveness was my main challenge, but my mentor gave me some hints, and I was able to fix them.
  * I wanted to use background colors or images, but my pictures in the home and services sections weren't transparent enough. As a solution, I kept the background white.



## Deployment
To deploy a site on GitHub Pages, start by going to the repository's settings, then to the "Pages" section under "Code and Automation." Choose "Deploy from a branch" as the source, select the "main" branch, and save your changes. The website's link will appear at the top of the page. Changes pushed to the main branch will automatically update the deployed site.


## Credits
### Content
* Most parts of the website are inspired by this playlist generated by [mbedev](<https://www.youtube.com/watch?v=SwN0DzXfQ9Y&list=PLqyfANh4Bh-8dTeTn-NM9YjMaalkx9nRk>).
* many credits to  [Love running](https://github.com/Code-Institute-Solutions/love-running-v3) 



### Media
* The logo generated by AI and is taken from [LOGO.com](https://logo.com/).
* All the images generated during my education in the universities.


### Acknowledgements
* My mentor, Medale Oluwafemi, for his invaluable guidance.