const express =  require('express');

const {signupUser,loginUser} = require('../controllers/userController')

const cors = require('cors')
const router = express.Router();
router.use(cors());


router.post('/login',loginUser)

router.post('/signup',signupUser)
module.exports = router;