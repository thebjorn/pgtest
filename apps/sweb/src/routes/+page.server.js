import {PrismaClient} from 'database'

const client = new PrismaClient()

export async function load({locals}) {
    return {
        user: await client.person.findUnique({
            where: {
                id: 'cluprcuev0000sdh4z5bumfhn'
            }
        })
    }
}