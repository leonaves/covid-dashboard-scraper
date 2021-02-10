# COVID Dashboard Scraper

Fetches the UK COVID-19 dashboard, takes a screenshot of the daily update and emails it to you.

## Requirements
- Node
- Yarn

## Local Dev Setup

Install dependencies:
```shell
yarn install
```

Setup local environment:
```shell
cp .env.example .env
```

Modify the `.env` file to use your email address and Sendgrid API key.

Source the `.env` file into your shell:

```shell
source .env
```

## Running task
```shell
yarn run scrape
```

## Deploy to heroku
Create an app on heroku and then:

```shell
$ brew tap heroku/brew && brew install heroku
$ heroku login
$ heroku git:remote -a <app-name>
$ heroku buildpacks:add https://github.com/jontewks/puppeteer-heroku-buildpack
$ heroku config:set RECIPIENT_EMAIL=<email>
$ heroku config:set SENDER_EMAIL=<email>
$ heroku config:set SENDGRID_API_KEY=<api key>
$ git push heroku master
```

## Run on a schedule on heroku

```shell
$ heroku addons:create scheduler:standard
$ heroku addons:open scheduler
```

Then configure in the Web UI that opens.
