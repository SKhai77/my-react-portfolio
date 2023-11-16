# Sian React Portfolio

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Description

Today's modern websites are driven by data and user demands. The ability to personalize user data is crucial in the current and future web development landscape. As user demands evolve, applications must adapt and become more performant. 
Therefore, to keep up with the current demands, some existing fully function applications need to implement the technologies for it. In the same way, the goal of this project is to work on the starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end.


## Technologies

<!-- - Apollo/client/server -->
- Express.js
<!-- - GraphQL -->
- Heroku
- JavaScript
<!-- - JSON Web Tokens -->
<!-- - Mongoose ODM -->
- Node.js
<!-- - NoSQL/ MongoDB -->
- React

## Installation

In order to be able to run the applicaton, you are required to do the following:

- Download the zip file/ clone the GitHub repo
- Open the folder in VSCode
- Click the "Toggle Panel" on the right-side or "Ctrl+J" to see the Terminal or Command Line Interface(CLI)
- Install npm (Node Package Manager) inside the repo by typing the following code in the Command Line:

```
    npm install               Press Enter
```

## Usage

To use the application,

- You need to do, "npm install" if you haven't done in the Installation section above.
- Type the following commands in the Command Line to run and test the GraphQL `server-side` application:

```
    npm start               Press Enter
```

- Type the following commands in the Command Line to run both client side and server side. Then test the application from the frontend, `client-side`:

```
    npm run develop               Press Enter
```

- Then, test all the functions and features.

```md
- Create an account
- Login:
  - Search books
  - Save books
  - View saved books
  - Delete saved books
```

- The application is deployed on Heroku. Visit the live website by [clicking here](https://sian-mern-portfolio.netlify.app/).

## Screenshots

The following image shows the book search results with a "`Save this Book!`" button on each book:

![Search Books Screenshot](./client/src/assets/screenshots/search-books.png)

The following image shows the "`Save this Book!`" button is clicked for saving books as the button is changed to `This book has already been saved!`:

![Save Books Screenshot](./client/src/assets/screenshots/save-books.png)

The following image shows the view of saved books under "`See Your Books`" menu:

![View Saved Books Screenshot](./client/src/assets/screenshots/view-saved-books.png)