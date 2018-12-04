import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Urgency, Task} from './task/model/task.interface';

const lorem_20 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut facere maxime quaerat sapiente sit!
                 Consectetur dolorum eligendi odio quibusdam ratione!`;
const lorem_50 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem earum eius exercitationem nisi
                 nulla quibusdam quos. A aliquid asperiores atque, corporis debitis delectus distinctio dolore doloribus
                 ducimus eaque excepturi fugiat iste itaque iusto, laboriosam molestiae optio perspiciatis provident quibusdam
                 quo ratione repudiandae saepe sapiente sequi soluta unde vero voluptatem?`;

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const tasks: Task[] = [
            {
                id: 100,
                title: 'Купить продуктов',
                description: lorem_20,
                status: true,
                urgency: Urgency.High,
                finishTo: new Date('1/1/16'),
                state: 'inactive'
            },
            {
                id: 101,
                title: 'Buy product',
                description: lorem_50,
                status: false,
                urgency: Urgency.Low,
                finishTo: new Date('5/2/16'),
                state: 'inactive'
            },
            {
                id: 102,
                title: 'Доделать работу',
                description: lorem_20,
                status: false,
                urgency: Urgency.High,
                finishTo: new Date('1/20/16'),
                state: 'inactive'
            },
            {
                id: 103,
                title: 'Отослать письмо по работе',
                description: lorem_50,
                status: true,
                urgency: Urgency.Middle,
                finishTo: new Date('3/2/17'),
                state: 'inactive'
            },
            {
                id: 104,
                title: 'Написать еще один Ангуляр компонент',
                description: lorem_20,
                status: false,
                urgency: Urgency.High,
                finishTo: new Date('1/12/15'),
                state: 'inactive'
            },
            {
                id: 105,
                title: 'Пополнить счет на телефоне',
                description: lorem_20,
                status: false,
                urgency: Urgency.Low,
                finishTo: new Date('1/20/16'),
                state: 'inactive'
            },
            {
                id: 106,
                title: 'Посмотреть фильм',
                description: '',
                status: true,
                urgency: Urgency.Middle,
                finishTo: new Date('3/2/17'),
                state: 'inactive'
            },
            {
                id: 107,
                title: 'Test8',
                description: '',
                status: true,
                urgency: Urgency.High,
                finishTo: new Date('1/12/15'),
                state: 'inactive'
            },
            {
                id: 108,
                title: 'Buy product',
                description: lorem_20,
                status: false,
                urgency: Urgency.Middle,
                finishTo: new Date('5/2/16'),
                state: 'inactive'
            },

            {
                id: 200,
                title: 'Купить продуктов',
                description: lorem_20,
                status: true,
                urgency: Urgency.High,
                finishTo: new Date('1/1/16'),
                state: 'inactive'
            },
            {
                id: 201,
                title: 'Buy product',
                description: lorem_20,
                status: false,
                urgency: Urgency.Low,
                finishTo: new Date('5/2/16'),
                state: 'inactive'
            },
            {
                id: 202,
                title: 'Доделать работу',
                description: lorem_20,
                status: false,
                urgency: Urgency.High,
                finishTo: new Date('1/20/16'),
                state: 'inactive'
            },
            {
                id: 203,
                title: 'Отослать письмо по работе',
                description: lorem_20,
                status: true,
                urgency: Urgency.Middle,
                finishTo: new Date('3/2/17'),
                state: 'inactive'
            },
            {
                id: 204,
                title: 'Написать еще один Ангуляр компонент',
                description: lorem_20,
                status: false,
                urgency: Urgency.High,
                finishTo: new Date('1/12/15'),
                state: 'inactive'
            },
            {
                id: 205,
                title: 'Пополнить счет на телефоне',
                description: lorem_20,
                status: false,
                urgency: Urgency.Low,
                finishTo: new Date('1/20/16'),
                state: 'inactive'
            },
            {
                id: 206,
                title: 'Посмотреть фильм',
                description: lorem_20,
                status: true,
                urgency: Urgency.Middle,
                finishTo: new Date('3/2/17'),
                state: 'inactive'
            },
            {
                id: 207,
                title: 'Test8',
                description: '',
                status: true,
                urgency: Urgency.High,
                finishTo: new Date('1/12/15'),
                state: 'inactive'
            },
            {
                id: 208,
                title: 'Buy product',
                description: 'Небыл уже неделю, давно полра',
                status: false,
                urgency: Urgency.Middle,
                finishTo: new Date('5/2/16'),
                state: 'inactive'
            },
        ];
        return {tasks};
    }
}
