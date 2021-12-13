 /*-----------------------------------------------------------
 * Project........: Node.Api
 * Description....: Api of exemple in node with typescript
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Info...........: Configure alias
 * ---------------------------------------------------------*/

import * as path from 'path';
import modueAlias from 'module-alias';
 
const files = path.resolve(__dirname, '../..');
 
const alias = modueAlias.addAliases({
     '@src': path.join(files,'src'),
     '@test':path.join(files,'test')
});
 
export default alias;