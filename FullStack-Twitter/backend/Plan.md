1. index.js -> Set up our server
2. install packages:
    -express, mongoose ... 
3. Create a folder for Routes/Controllers/Config/Model
4. Create the following files:
    - models/Tweet.js
    - controllers/tweets.js
    - routes/tweets.js
    - config/database.js
    - seeds.js
    - .env

5. Code the basic skeleton for the files in this order:
    - config/database.js -> Connect to DB
    - models/Tweet.js
    - seeds.js -> insert sample data
    - routes/tweets.js (and register route in index.js)
    - controllers/tweets.js -> get All/get Detail