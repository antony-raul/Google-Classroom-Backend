const express = require('express')
const UserController = require('./controllers/UserController.js')
const ClassroomController = require('./controllers/ClassroomController.js')
const SessionController = require('./controllers/SessionController.js')
const InvitedTeacherController = require('./controllers/InvitedTeacherController.js')
const InvitedStudentController = require('./controllers/InvitedStudentController.js')
const ClassroomUsersController = require('./controllers/ClassroomUsersController.js')
const PostsController = require('./controllers/PostsController.js')
const ContentTypeController = require('./controllers/ContentTypeController.js')
const sendEmailController = require('./controllers/sendEmailController.js')

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.post('/users', UserController.create)
routes.get('/users', UserController.index)
//routes.delete('users/:id',UserController.delete)

routes.post('/classrooms', ClassroomController.create)
routes.get('/classrooms',ClassroomController.index)

routes.post('/teachers', InvitedTeacherController.create)
routes.put('/teachers', InvitedTeacherController.update)
routes.get('/teachers', InvitedTeacherController.index)

routes.post('/students', InvitedStudentController.create)
routes.get('/students', InvitedStudentController.index)

routes.get('/classroomsusers',ClassroomUsersController.index)
routes.delete('/classroomsusers/:user_id',ClassroomUsersController.delete)

routes.post('/posts', PostsController.create)

routes.post('/content-types', ContentTypeController.create)

routes.post('/send-email',sendEmailController.create)

module.exports = routes;