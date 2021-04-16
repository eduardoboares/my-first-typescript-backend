export interface IMailTo
{
    name: string;
    email: string;
}

export interface IMailMessage
{
    subject: string;
    body: string;
    attachment?: Array<string>;
}

// DTO = Data Transfer Object (DDD)
export interface IMessageDTO
{
    to: IMailTo;
    message: IMailMessage;
}

export interface IEmailService
{
    sendMail(request: IMessageDTO): void;
}