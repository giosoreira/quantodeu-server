import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import errorhandler from 'errorhandler';
import dotenv from 'dotenv';

dotenv.config();
const app = express();


// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connected as id ' + connection.threadId);
// });

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(app.router);

if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler())
}

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
