/*-----------------------------------------------------------
 * Project........: Node.Api
 * Description....: Api of exemple in node with typescript
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Info...........: Control of service on express.
 *                  Run npm start
 * ---------------------------------------------------------*/

import './config/module-alias';
import app from './app'

const port = process.env.PORT || '3000';

app.listen(port, function ()
{
    console.log(` `);
    console.log(`Starting Node.API...`);
    console.log(`Listening on port ${port}`);
});