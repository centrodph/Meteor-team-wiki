# Meteor-team-wiki

# Notes
http://es.discovermeteor.com/

## Install Meteor
$ curl https://install.meteor.com/ | sh

### Testing on c9
meteor --port $IP:$PORT

## config external mongo db

export MONGO_URL=mongodb://SERVERNAME:PORT/YOUR_DB_APP

## Install dependencies

npm install

## Remove insecure packages

meteor remove insecure
meteor remove autopublish

## Start server in another port

-op1: meteor run --port 5050 // https://forums.meteor.com/t/meteor-starts-only-on-port-3000-not-any-other-port/27271/8
-op2: edit the package.json file to

  "scripts": {
    "start": "meteor run --port 5050"
  }

  and start the server with npm start

## Behind a Proxy

export HTTP_PROXY=http://xxx.xxx:port

export HTTPS_PROXY=http://xxx.xxx:port

## Use collections inside React

meteor npm install --save react-addons-pure-render-mixin
meteor add react-meteor-data
meteor npm install --save react-router react-router-dom
meteor npm install --save bcrypt

You can read the full documentation on : https://www.meteor.com/tutorials/react/collections

## Add users accounts

meteor add accounts-ui accounts-password
Example: https://www.meteor.com/tutorials/react/adding-user-accounts


## Custom user management

http://www.mrscottmcallister.com/custom-authentication-in-meteor/
