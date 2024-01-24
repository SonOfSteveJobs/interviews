/* 
2. Тип `PartialExcept` должен быть реализован таким образом, 
чтобы все поля типа `PartialExcept<User, 'id'>` кроме `id` были необязательными 
*/

type PartialExcept<T, Key extends keyof T> = Partial<T> & Pick<T, Key>

type User = {
    id: number;
    name: string;
    age: number;
    email: string;
}


const partialUser: PartialExcept<User, 'id'> = {
    name: '123'
}