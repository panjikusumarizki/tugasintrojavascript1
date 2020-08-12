let data = {
    id: 1,
    name: 'Leanne Graham',
    userName: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874'
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
}

const myData = {...data, name: 'Panji Kusumarizki', email: 'pnksm009@gmail.com', hobby: ['Belajar', 'Bermusik']};

console.log(myData);
console.log();

const {address} = data;

console.log(address.street);
console.log(address.city);