import express from 'express'
import {Application, Request, Response, NextFunction} from 'express'
import cors  from 'cors'
const routes = require('./routes')

class Index{
  public express: Application;

  public constructor(){
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use('/api/v1',routes);
  } 

  private routes(): void {
    this.express.use((error: any, req: Request, res: Response, next: NextFunction) => {
        res.status(error.status || 500)
        res.json({
            code: error.code,
            error: error.message
        })
    }); 
    // // this.express.get('/',(req,res) => {
    // //   return res.send('Teste'); 

    // });
  }
  
}

export default new Index().express;
