import { Message } from '../../models/message/message.interface';
import {USERS_LIST} from '../../mocks/profiles/profiles';

const messageList: Message[] = [
    {
        user: USERS_LIST[0],
        date: new Date(),
        lastMesssage:"Hello AK"
    }, {
        user: USERS_LIST[1],
        date: new Date(),
        lastMesssage:"Hello LO"
    }, {
        user: USERS_LIST[2],
        date: new Date(),
        lastMesssage:"Hello GH"
    }, {
        user: USERS_LIST[3],
        date: new Date(),
        lastMesssage:"Hello RO"
    }, {
        user: USERS_LIST[1],
        date: new Date(),
        lastMesssage:"Hello SI"
    }
]

export const MESSAGE_LIST = messageList; 