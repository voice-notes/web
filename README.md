## Tape It - Web Interface

Send voice notes to your colleagues with [Slack](https://slack.com)

This repository hosts the frontend interface for the application.
Check the app out [here](https://tapedit.netlify.app/)!

![Tape It interface](https://ibb.co/jrNJngV)

## Getting started

To get the code:

This project uses yarn package manager. Make sure you have [yarn installed](https://classic.yarnpkg.com/en/docs/install/), clone the project and then run the following inside the repository locally:
```shell
git clone git@github.com:voice-notes/web.git
yarn install
yarn start
```
Open http://localhost:3000/ in your browser to view the app!

## Running tests

```shell
yarn test
```

## Technologies used

- Language: TypeScript, CSS
- Framework: React
- Testing: Jest, Enzyme, ts-jest
- Linting: ESLint, StyleLint, Prettier
- CI/CD: CircleCI, Netlify
- Package Manager: Yarn

## Functionality implemented

- A user can click 'start recording' and 'stop recording'
- App requests permission to use device audio input, and captures audio as a blob

## Still to implement

- A user can click 'send' and be notified of success
- Establish connection with AWS to host message
- Create connection with API and send note url to backend
- A receiver is sent a url to access the voice note through slack
- Slack integration
