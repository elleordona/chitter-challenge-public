# Chitter Challenge by Elle Ordoña

## Info

The app is functional but I didn't have time to fully test all the functionalities. I will personally carry them out after the hand in date though

## Technologies Used

- MongoDB (database)
- express (web framework)
- express-validator (middleware)
- mongoose (object modelling)
- cors (middleware)
- dotenv (environment variables)
- mocha/chai/chai-http (backend testing)
- React.js (user interface)
- CDBReact (user interface styling)
- bootstrap (user interface styling)
- react-router-dom (react app routing)
- axios (front-backend connection)
- jest (frontend testing)
- bcrypt (encrypting password)
- jsonwebtoken (creating tokens for logging in)

---

## How to Run

To run app:

1. run `npm install` in backend folder
2. run `npm start` in backend folder
3. run `npm install` in frontend folder
4. run `npm start` in frontend folder

To run tests:

1. run `npm test` in backend/frontend folder

---

## Acceptance Criteria

---

## Part 1

### User Story 1

```md
As a trainee software engineer
So that I can let people know what I am doing
I want to post a message (peep) to chitter
```

### Initial Thoughts 1

- Create a database in MongoDB
- Use a database to store the peeps posted
- POST request to a database
- Create simple static chitter page that displays the peep in the database

### Components 1

#### Database/Model/Validation

- Peeps
  - peepId (auto generated)
  - username
  - peepBody (character limit?) [`required`]
  - date (auto generated) [`required`]

#### Routes 1

- `/` (index)
- `/add`

#### Services 1

- addPeep
- getAllPeeps

### Testing 1

Backend Testing

**Test 1** - testing /GET => get all peeps

**Test 2** - testing /POST => peep is created when properly formed

**Test 3** - testing /POST => peep must have a peepBody field

**Test 4** - testing /POST => peep must have a date field

**Test 5** - testing /POST => peep must have a valid date

PeepForm Component Testing

**Test 16** - should render a peep body input and label

**Test 17** - should render a submit button

**Test 18** - should render a new value in the input when the peepBody is updated

**Test 19** - should enable the submit button when the peepBody is populated

**Test 20** - submitPeep prop function is called when the submit button is clicked

PeepSubmit Component Testing

**Test 40** - should render PeepForm

**Test 41** - should call mockSubmit when the form is submitted

**Test 42** - should render 'redirected' when submitted is set to true

---

## Part 2

### User Story 2

```md
As a trainee
So that I can see what others are saying
I want to see all peeps in reverse chronological order
```

### Initial Thoughts 2

- You don't have to be logged in to see peeps
- Create a Date object when a peep is posted
- Front-end
- Reverse chronological: newest first
- Want the home page to look like this (Search Bar and Trends optional)
  ![twitter mock-up](images/twitter-homepage-mockup.jpeg)
- Use CSS/bootstrap to add design to the page

### Components 2

- Homepage
  - Navbar (Logo, Home Link, Compose Peep Link, Profile Link, Login/Register Link)
  - Feed

### Tests 2

Sidebar Component Testing

**Test 6** - Sidebar matches snapshot

Feed Component Testing

**Test 7** - Should render "Peeps Loading" on initial render

**Test 8** - Should render "No Peeps" if empty array returned from server

**Test 9** - getPeeps makes the external data call

**Test 10** - a successful request returns the right data

**Test 11** - an unsuccessful request returns the error object

**Test 12** - an empty request returns an error message

**Test 13** - should render "Peeps are loading" on initial render

**Test 14** - should render "no data" message when an error is returned

---

## Part 3

### User Story 3

```md
As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made
```

### Initial Thoughts 3

- Use the date object to include the time stamp of when the peep was posted
- include the date when rendering the peep

### Tests 3

Feed Component Testing

**Test 15** - the Date is rendered when the Feed is rendered

---

## Part 4

### User Story 4

```md
As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter
```

### Initial Thoughts 4

- Trainee SEs sign up with their email, password, name and a username (e.g ewright@digitalfutures.com, password123, Ed Wright, edwright6789)
- Usernames and emails are unique
- Use a database to store all the registered users

### Components 4

- Database

  - User (username, email, name, password)

- Register (backend)

  - User model
  - register route (post to database)

- Register (frontend)
  - Register component

### Tests 4

Backend Testing

**Test 21** - testing /POST => a user is created when properly formed

**Test 22** - testing /POST => a user must have an email

**Test 23** - testing /POST => a user must have a password

**Test 24** - testing /POST => a user must have a username

**Test 25** - testing /POST => a user must have a name

**Test 26** - testing /POST => the username must be unique

**Test 27** - testing /POST => the email must be unique

Register Component Testing

**Test 26** - should render a name label and input

**Test 30** - should render a username label and input

**Test 31** - should render an email label and input

**Test 32** - should render a password label and input

**Test 34** - should render a new value in the input when the name is updated

**Test 35** - should render a new value in the input when the username is updated

**Test 36** - should render a new value in the input when the email is updated

**Test 37** - should render a new value in the input when the password is updated

**Test 38** - should enable the register button when all inputs are populated

**Test 39** - registerUser prop function is called when the register button is clicked

---

## Part 5

### User Story 5

```md
As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter
```

### Initial Thoughts 5

- Login requires the user to have been registered
- Access to the database to make sure the user is registered

### Domain Model 5

### Tests 5

---

## Part 6

### User Story 6

```md
As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

### Domain Model 6

### Initial Thoughts 6

- Log out button will replace the Log in/Register button in the header when a user is logged in
- Look back at ed's log in example

### Tests 6

---

## Extended Criteria

---

## Part 7

### User Story 7

```md
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a peep
```

### Domain Model 7

### Initial Thoughts 7

### Tests 7

---

## Part 8

### User Story 8

```md
As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee
```

### Domain Model 8

### Initial Thoughts 8

### Tests 8
