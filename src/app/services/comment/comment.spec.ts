import { Comment } from './comment';

describe('Comment', () => {
  it('should create an instance', () => {
    expect(new Comment()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const comment = new Comment({
        food_quality: 1,
        food_taste: 2,
        service_quality: 3,
        service_speed: 4,
        customer_name: 'John',
        customer_tel: '12345678',
        comment_added: 'Good',
    });
    expect(comment.food_quality).toEqual(1);
    expect(comment.food_taste).toEqual(2);
    expect(comment.service_quality).toEqual(3);
    expect(comment.service_speed).toEqual(4);
    expect(comment.customer_name).toEqual('John');
    expect(comment.customer_tel).toEqual('12345678');
    expect(comment.comment_added).toEqual('Good');
  });
});
