/*-----------------------------------------------------------
 * Project........: Node.Api
 * Description....: Api of exemple in node with typescript
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * HomeController by index http://localhost:3000/api/
 * ---------------------------------------------------------*/

import {Request, Response} from 'express';

class HomeController {
    public async index(req: Request,res: Response): Promise<Response>{
        const version='1.0.0.R001';
        const message = `Node Api: / V.${version}`;
        console.log(`Request route home > Response: ${message}`)
        return res.json(`${message}`); 
    }
}

export default new HomeController();