# Bastards assignment

Result from assignment for Software Bastards. Runs the validator on a schema and processes the result. It will display some logging on whether sstuff has been valid in the demo.

I wanted to keep things minimal with assets so I'm only using Node, ESLint and NodeMon for running and Open to get a surprise. You could technically use schema-validator.mjs directly.

I also opted for using Module JS so I can import/export witha familiar syntax and have it look more like typescript. Thats also why everything is .mjs instead of .js but it can easily be transformed back. Also focused on early exits and making things a bit more structured and separated.

Spent about 3 hours on it but could've done less if I didn't use MJS and NodeJS stuff probably. And another hour less if I did just the barebones.

## Setup and running

* Install NodeJS
* Run `npm run demo` to see the result and get a surprise

You can also:

* Run `npm run watch-demo` to develop and run the result each time you save
* Run `npm run demo-single` to mess around with the code a bit without touching the main result.
* Set whether we log details or not. This could be enhanced but I kinda like the console.log system where you can just chain and debug easily so I didn't replace that yet.

## Tech

* NodeJS to easily run the project demos
* ESLint to validate some basic rules
