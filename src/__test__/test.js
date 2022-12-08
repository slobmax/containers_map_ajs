import ErrorRepository from '../app';

const error = new ErrorRepository();

test('Проверка метода translate класса ErrorRepository', () => {
  const recieved = error.translate(2);
  const expected = 'Error 2';
  expect(recieved).toBe(expected);
});

test('Проверка метода translate на выброс ошибки', () => {
  expect(() => error.translate(6)).toThrow();
});
