import bcrypt from 'bcryptjs'
const users = [
    {
        name:'Admin User',
        email:'admin@example.com',
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name:'Agung',
        email:'agung@example.com',
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name:'Juman',
        email:'juman@example.com',
        password: bcrypt.hashSync("123456", 10),
    },
]

export default users