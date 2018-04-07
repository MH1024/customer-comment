export class Comment {
    id: number;
    food_quality: number;
    food_taste: number;
    service_quality: number;
    service_speed: number;
    customer_name: String = '';
    customer_tel: String = '';
    comment_added: String = '';

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }
