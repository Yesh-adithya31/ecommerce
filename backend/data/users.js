import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Yesh Adithya',
        email: 'yesh@example.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Jhon Doe',
        email: 'John@example.com',
        password: bcrypt.hashSync('123456',10),
    },
    
]

export default users