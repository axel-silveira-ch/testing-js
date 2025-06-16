jest.setTimeout(20000); // Aumentar tiempo de espera a 20 segundos

const BooksService = require('./books.service');
const service = new BooksService();

describe('Test for BooksService', () => {
  describe('Test for getBooks()', () => {
    test('Should return a list of books', async () => {
      const books = await service.getBooks({});
      expect(books).toBeDefined();
      expect(Array.isArray(books)).toBe(true);
    });
  });

  describe('Test for createBook()', () => {
    test('Should create a new book', async () => {
      const newBook = {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
      };

      const createdBook = await service.createBook(newBook);
      expect(createdBook).toBeDefined();
      expect(createdBook._id).toBeDefined();
      expect(createdBook.title).toBe(newBook.title);
      expect(createdBook.author).toBe(newBook.author);
      expect(createdBook.year).toBe(newBook.year);
    });
  });
});

afterAll(async () => {
  await service.mongoDB.disconnect(); // CIERRA conexión a Mongo
});
