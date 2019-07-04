import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import errorhandler from 'errorhandler';

import * as ProductsModel from './product/model';

//ProductsModel.selectAll(1, console.log);
// selectUserById(1);


// const app = express();

// app.set('port', process.env.PORT || 3000);
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(app.router);

// if (process.env.NODE_ENV === 'development') {
//     // only use in development
//     app.use(errorhandler())
// }

// app.listen(app.get('port'), function () {
//     console.log('Express server listening on port ' + app.get('port'));
// });
