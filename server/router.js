const Router = require('koa-router');
const router = new Router();
const gagController = require('./controller/topicController.js');

router.get('/', topicController.getAllTopics);
router.post('/', topicController.postTopic);
router.post('/vote', voteController.addVote);

module.exports = router;