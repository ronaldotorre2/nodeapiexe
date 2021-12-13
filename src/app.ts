/*-----------------------------------------------------------
 * Project........: Node.Api
 * Description....: Api of exemple in node with typescript
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Info...........: Configure app
 * ---------------------------------------------------------*/

import express from 'express';
import routes from './routers';
import cors from 'cors';

class App 
{
    public express: express.Application;
    
    public constructor()
    {
        this.express = express();
        this.middleware();
        this.route();
    }

    private middleware(): void 
    {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private route(): void 
    {
       this.express.use(routes);
    }
}

export default new App().express;