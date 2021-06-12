const express = require('express');
const routes = express.Router();

const AuthMiddleware = require('./middlewares/AuthMiddleware');

const AuthController = require('./controller/AuthController');
const UserController = require('./controller/UserController');
const TechController = require('./controller/TechController');
const CompanyController = require('./controller/CompanyController');

routes.get('/', (req, res) => {
    return res.send('Hello, world!');
});

// AUTH routes
routes.post('/authenticate', AuthController.authenticate);
routes.get('/session', AuthMiddleware, AuthController.getCurrentSession);

// USER routes
routes.get('/users', AuthMiddleware, UserController.findByName);
routes.get('/users/:id', AuthMiddleware, UserController.findById);
routes.post('/users/changeStatus/:id', AuthMiddleware,UserController.changeStatus);
routes.post('/users', AuthMiddleware, UserController.create);
routes.put('/users/:id', AuthMiddleware, UserController.update);
routes.delete('/users/:id', AuthMiddleware, UserController.delete);

// TECH routes
routes.get('/techs', AuthMiddleware, TechController.findAll);
routes.get('/techs/:id', AuthMiddleware, TechController.findById);
routes.post('/techs', AuthMiddleware, TechController.create);
routes.put('/techs/:id', AuthMiddleware, TechController.update);
routes.delete('/techs/:id', AuthMiddleware, TechController.delete);

// COMPANY routes
routes.get('/companies', AuthMiddleware, CompanyController.findAll);
routes.get('/companies/:id', AuthMiddleware, CompanyController.findById);
routes.post('/companies', AuthMiddleware, CompanyController.create);
routes.put('/companies/:id', AuthMiddleware, CompanyController.update);
routes.delete('/companies/:id', AuthMiddleware, CompanyController.delete);


module.exports = routes;