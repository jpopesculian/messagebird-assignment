# MessageBird Assignment

## Description

Simple React / Node application for sending and receiving SMS through MessageBird.

### Backend

Backend written Koa and uses MongoDB for persistance and GraphQL as the data transport layer between the App and MongoDB. Files can be found in `/server`

### Frontend

Frontend written in React. Uses MobX as a state management system and Apollo to comunicate with the GraphQL server. ModuleCSS with PostCSS is used for styling. Webpack is used to build the bundle which gets served out of `/public`. Files can be found in `/client`

## Running

1. Clone the Repo
2. Setup MessageBird:
    - Create a Live API Key
    * Get a number (for your inbound SMS flow / originator)
    - Add a status url: `http(s)://yourhost/status`
    - Add an inbound SMS flow (Call HTTP endpoint with SMS)
        - Forward to URL (`POST http(s)://yourhost/inbound` with `application/json`)
2. Set `services.messagebird.environment.ACCESS_KEY` and `services.messagebird.environment.ORIGINATOR` in your `docker-compose.yml` file
3. `docker-compose up` to build and run on `localhost:3000`
4. Setup necessary tunneling service (e.g. ngrok)
