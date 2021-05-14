# Project Description
A front-end application that helps users to list(only 100 records) and browse all launches by SpaceX program and filter them based on Launch-Year 2006-2021(as mentioned in your provided document), Successful/Unsuccessful Launch, and Successful/Unsuccessful Landing. All 3 filtering categories can be used separately or combined.

# Approach
- Created aside bar component for filters using bootstrap and call function with arguments(filter Name, value).
- Handled passed arguments in a function and set it in object and pass to service file for observable (BehaviourSubject).
- The main-Section(Card) component gets arguments from observable using subscribe and call Rest API with or without filters using Shared-Service file injector with HttpClient Module.
- Get Rest API response in card-component and hold in a variable then pass to DOM(HTML).
- DOM has created using the bootstrap card and then implement For Loop using iterator for all elements passed in the card.

# Tech Stack
Angular 8.3.29
  - rxjs 6.4.0
  - tslint 5.15.0
  - typescript 3.5.3
Bootstrap 5.0.1
Netlify (Deployment & Hosting)

# SpaceX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Install Bootstrap
 
Run `npm install bootstrap@latest` and then Open angular-cli.json (for angular6 and later file name changed to angular.json ) and insert a new entry into the styles array  `"../node_modules/bootstrap/dist/css/bootstrap.min.css"`.
