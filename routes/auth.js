const express = require('express')
const authenticateUser = require('../middleware/authentication')
const router = express.Router()
const { register, login, updateUser } = require('../controllers/auth')
router.post('/register', register)
router.post('/login', login)
router.patch('/updateUser', authenticateUser, updateUser)

module.exports = router
