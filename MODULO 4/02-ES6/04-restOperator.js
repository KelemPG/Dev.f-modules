const persona = {
    firstName: 'Kelem',
    lastName: 'Perez',
    workAt: 'Londres',
    profession: 'QFB',
    genre: 'hombre'
}


const { firstName, lastName, workAt, ...moreInfo} = persona;

console.log(moreInfo);