const express = require ('express')
const router = express.Router()
const tweetsController = require('../controllers/tweets')
// We import our controller functions above

// We define the routes and controllers
router.get('/tweets', tweetsController.getAllTweets)

router.post('/tweets', tweetsController.createTweets)

// We export our routs
module.exports = router