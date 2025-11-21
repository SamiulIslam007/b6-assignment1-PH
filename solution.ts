function formatValue(
  value: number | string | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

interface RatingItem {
  title: string;
  rating: number;
}

function filterByRating(items: RatingItem[]): RatingItem[] {
  return items.filter((item) => item.rating >= 4);
}

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
}

function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const combined = [...arr1, ...arr2];

  const unique: (string | number)[] = [];

  for (const item of combined) {
    let isDuplicate = false;

    for (const uniqueItem of unique) {
      if (uniqueItem === item) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unique.push(item);
    }
  }

  return unique;
}
