import {TestBed, async, inject} from '@angular/core/testing';
import {Comment} from '../comment/comment';
import {CommentDataService} from './comment-data.service';

describe('CommentDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentDataService]
    });
  });

  it('should ...', inject([CommentDataService], (service: CommentDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllComments()', () => {

    it('should return an empty array by default', inject([CommentDataService], (service: CommentDataService) => {
      expect(service.getAllComments()).toEqual([]);
    }));

    it('should return all comments', inject([CommentDataService], (service: CommentDataService) => {
      const comment1 = new Comment({
            food_quality: 1,
            food_taste: 2,
            service_quality: 3,
            service_speed: 4,
            customer_name: 'John',
            customer_tel: '12345678',
            comment_added: 'Good'
        });
      const comment2 = new Comment({
            food_quality: 4,
            food_taste: 1,
            service_quality: 2,
            service_speed: 5,
            customer_name: 'Joe',
            customer_tel: '12345670',
            comment_added: 'Normal'
        });
      service.addComment(comment1);
      service.addComment(comment2);
      expect(service.getAllComments()).toEqual([comment1, comment2]);
    }));

  });

  describe('#save(comment)', () => {

    it('should automatically assign an incrementing id', inject([CommentDataService], (service: CommentDataService) => {
        const comment1 = new Comment({
            food_quality: 4,
            food_taste: 2,
            service_quality: 1,
            service_speed: 3,
            customer_name: 'Jasmine',
            customer_tel: '12345679',
            comment_added: 'OK'
        });
      const comment2 = new Comment({
            food_quality: 4,
            food_taste: 2,
            service_quality: 2,
            service_speed: 1,
            customer_name: 'Bob',
            customer_tel: '12345676',
            comment_added: 'asdfefeeff'
        });
      service.addComment(comment1);
      service.addComment(comment2);
      expect(service.getAllComments()).toEqual([comment1, comment2]);
    }));
  });
});
