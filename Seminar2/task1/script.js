class Library {
    #books;

    constructor(initialBooks = []) {
        // Удаляем дубликаты из начального списка книг
        this.#books = [...new Set(initialBooks)];
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error(`Книга "${title}" уже существует в библиотеке.`);
        }
        this.#books.push(title);
    }

    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error(`Книга "${title}" не найдена в библиотеке.`);
        }
        this.#books.splice(index, 1);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

// Пример использования:
const myLibrary = new Library(['1984', 'To Kill a Mockingbird']);

console.log(myLibrary.allBooks); // ['1984', 'To Kill a Mockingbird']

myLibrary.addBook('The Great Gatsby');
console.log(myLibrary.allBooks); // ['1984', 'To Kill a Mockingbird', 'The Great Gatsby']

try {
    myLibrary.addBook('1984'); // Выдаст ошибку
} catch (error) {
    console.error(error.message); // Книга "1984" уже существует в библиотеке.
}

try {
    myLibrary.removeBook('Moby Dick'); // Выдаст ошибку
} catch (error) {
    console.error(error.message); // Книга "Moby Dick" не найдена в библиотеке.
}

console.log(myLibrary.hasBook('The Great Gatsby')); // true
console.log(myLibrary.hasBook('Moby Dick')); // false

console.log(myLibrary.allBooks); // ['1984', 'To Kill a Mockingbird', 'The Great Gatsby']

