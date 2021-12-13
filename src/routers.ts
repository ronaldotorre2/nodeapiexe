/*-----------------------------------------------------------
 * Project........: Node.Api
 * Description....: Api of exemple in node with typescript
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Info...........: Configure routes
 * ---------------------------------------------------------*/

import { Router } from 'express';

import HomeController from './module/home/homeController';

const routes =  Router();

routes.get('/api/',HomeController.index);

export default routes;