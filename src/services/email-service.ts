import { IEmailService, IMessageDTO } from './models/email.model';

export default class EmailService implements IEmailService
{
    sendMail({ to, message }: IMessageDTO)
    {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
};