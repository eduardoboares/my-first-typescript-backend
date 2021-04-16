import { Request, Response } from 'express';
import users from '../constants/users';
import EmailService from '../services/email-service';

export default {
    async index(req: Request, res: Response)
    {
        return res.json(users);
    },

    async create(req: Request, res: Response)
    {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'Eduardo Pereira',
                email: 'eduardop.boares@gmail.com'
            },
            message: {
                subject: 'Bem-vindo ao sistema',
                body: 'Seja bem-vindo'
            }
        });

        return res.send();
    }
};