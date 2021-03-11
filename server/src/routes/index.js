import express from 'express';
import {handleError} from '../middlewares';
import demoRouter from './demo';
import userRouter from './signup'
const router = express.Router();

router.use(demoRouter);
router.use(userRouter)
router.use(handleError);

export {
    router
}