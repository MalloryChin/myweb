import express from 'express';
import * as mails from './mails.controller';

let router = express.Router();

router.post('/sendmail', mails.sendMail);

export {router};

