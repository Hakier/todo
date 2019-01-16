import { Todo } from './todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toBeDefined();
  });

  describe('when constructed', () => {
    let todo: Todo;

    beforeAll(() => {
      todo = new Todo('Some person', 'Some task');
    });

    it('should set person', () => {
      expect(todo.person).toBe('Some person');
    });
    it('should set task', () => {
      expect(todo.task).toBe('Some task');
    });
  });
});
