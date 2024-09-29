type Gender = 'male' | 'female';

export interface Person {
  name: string;
  gender: Gender;
  age: number;
}

const persons: Person[] = [
  {
    name: 'Alice Johnson',
    gender: 'female',
    age: 28,
  },
  {
    name: 'John Smith',
    gender: 'male',
    age: 34,
  },
  {
    name: 'Maria Garcia',
    gender: 'female',
    age: 22,
  },
  {
    name: 'Michael Brown',
    gender: 'male',
    age: 10,
  },
  {
    name: 'Sophia Williams',
    gender: 'female',
    age: 12,
  },
  {
    name: 'James Davis',
    gender: 'male',
    age: 29,
  },
  {
    name: 'Emma Wilson',
    gender: 'female',
    age: 25,
  },
  {
    name: 'David Martinez',
    gender: 'male',
    age: 38,
  },
  {
    name: 'Olivio Rodriguez',
    gender: 'male',
    age: 15,
  },
  {
    name: 'Daniel Lee',
    gender: 'male',
    age: 27,
  },
];

export default persons;