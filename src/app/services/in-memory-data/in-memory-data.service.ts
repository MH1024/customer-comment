import { Comment } from '../comment/comment';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const comments = [
        { id: 11,
            food_quality: 3,
            food_taste: 2,
            service_quality: 1,
            service_speed: 1,
            customer_name: 'Bill',
            customer_tel: '12345678',
            comment_added: ''
        },
        { id: 12,
            food_quality: 1,
            food_taste: 2,
            service_quality: 1,
            service_speed: 4,
            customer_name: 'Cathy',
            customer_tel: '12345678',
            comment_added: 'Good'
        },
        { id: 13,
            food_quality: 5,
            food_taste: 5,
            service_quality: 5,
            service_speed: 5,
            customer_name: 'Carl',
            customer_tel: '123456780000',
            comment_added: 'Good'
        },
        { id: 14,
            food_quality: 1,
            food_taste: 2,
            service_quality: 1,
            service_speed: 1,
            customer_name: 'Justin',
            customer_tel: '12345678',
            comment_added: 'No'
        },
        { id: 15,
            food_quality: 1,
            food_taste: 2,
            service_quality: 3,
            service_speed: 4,
            customer_name: 'John',
            customer_tel: '12345678',
            comment_added: 'adhsdasdajksdasdsdsdsds'
        },
        { id: 16,
            food_quality: 5,
            food_taste: 5,
            service_quality: 3,
            service_speed: 4,
            customer_name: 'Dell',
            customer_tel: '12345678111',
            comment_added: 'Good'
            }
        ];
    return {comments};
  }
}
