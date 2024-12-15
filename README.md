
# AM Digital Tech Challenge


This repository contains AM Digital Technical Challenge for the Senior Test Engineer role


## Table of Contents

- [Implementation approach](#Approach)
- [Installation](#Installation)
- [Running the tests](#Runing-the-test)
- [Reporting](#Run-the-test-in-watch-mode)
- [Lessons learned](#Reports)



## Approach

[Playwright-bdd](https://github.com/vitalets/playwright-bdd), Playwright runner, and Typescript were selected for this assessment as they closely aligned with the requirement (test cases in Gherkin syntax), but mainly because of some of these benefits listed below

- Automatic browser initialization and cleanup
- Auto-waiting of page elements
- Power of Playwright fixtures [and more...](https://playwright.dev/docs/library#key-differences)



## Installation

To start this project, you will need the latest version of Node.js and npm installed on your machine. You can then clone this repository and install the dependencies using the following commands:

Clone the repo to your local

```bash
  gh repo clone wisdomamopho/am-digital
```
Change the directory to `am-digital`

```bash
  cd am-digital
```
Install dependencies
```bash
 npm install
```
Install browsers
```bash
 npx playwright install
```


    
## Running the test

to run the test files from the Gherkin documents (.feature files)

```bash
npm test
``` 


## Run the test in watch mode

To watch feature/steps files and automatically regenerate tests you can use
```bash
npm run watch
```

## Reports
to view html report 
```bash
npm run report:html
```

### What did I learn while building this project?
***willingness to learn***: I have never used the Playwright-BDD or Cucumber library before but I was happy to learn it enough to deliver as close to the requirement as possible 

***new techniques***: handling scenarios such as Infinite scroll which is not a functionality present in the application I currently maintain


### Limitations
***Site/server performance*** understanding how the frontend and server works, such as Infinite scroll, server latencies, data delivery mechanisms and chain requests etc

***Page context scope*** I realised mid-way through the assessment that the page contexts were limited between step `Given`, `When`, and `Then` blocks in the *.step* files. This is probably due to the extra layer Cucumber adds to playwright as this is not the case with vanilla playwright


### Assumptions
Some assumptions were made on the server performance but I handled the callback requests mostly utilising standard playwright classes, more information is recorded on the `steps.ts` and `common.fixture.ts` files 


