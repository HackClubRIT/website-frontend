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
| SAPPER_APP_API_ENDPOINT | api endpoint with no slash in the end| URL | http://localhost:8000 in debug mode | YES |
| SAPPER_APP_DEBUG_MODE | set true if you are in debug mode | BOOLEAN | - | YES |
