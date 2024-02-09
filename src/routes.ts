import  express, { NextFunction, Request, Response, response } from 'express';
const routes = express.Router();

// import {Pagamento} from './domain/entities/produto';

var prefix = '';

prefix = '/teste';
routes.get(`${prefix}/inicio`, (req:Request,res:Response) => {
    res.json('foi');
});

module.exports = routes  