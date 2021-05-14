# Hack Club RIT Website: Frontend

### Running the project
1. To install all modules listed as dependencies in package.json file, run `npm install`

2. To run the project locally, execute the following commands in separated windows of your terminal:

`npm run dev` and
`npm run dev:tailwindcss`

### Environment Variables

| NAME | DESC | TYPE | DEFAULT | REQUIRED |
| --- | --- | --- | --- | --- |
| SAPPER_APP_SECRET | some secret key | string | - | YES |
| SAPPER_APP_APPLICATION_API_URL | api endpoint for application | URL | - | YES |
| SAPPER_APP_AUTHENTICATION_API_URL | api endpoint for authentication of user | URL | - | YES |
