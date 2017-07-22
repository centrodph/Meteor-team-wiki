# Meteor-team-wiki

# Notes

## config external mongo db

export MONGO_URL=mongodb://localhost:27017/your_db

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
