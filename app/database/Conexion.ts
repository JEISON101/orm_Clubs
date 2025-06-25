import {Client} from 'pg'

export const client = new Client({
    host:'127.0.0.1',
    port:5432,
    user:'postgres',
    database:'clubs_orm',
    password:'root'
})

client.connect();