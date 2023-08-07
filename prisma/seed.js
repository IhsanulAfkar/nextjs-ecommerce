const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const createCategories = await prisma.category.createMany({
        data: [
            { name: "Gaming" },
            { name: "Headphones" },
            { name: "Camera" },
            { name: "Smart Watch" },
            { name: "Computers" },
            { name: "Smart Phones" },
        ]
    })

    const user1 = await prisma.user.upsert({
        where: { email: 'ihsanul2001@gmail.com' },
        update: {},
        create: {
            email: 'ihsanul2001@gmail.com',
            name: 'Ihsanul Afkar',
            password: "12345",
            product: {
                create: [
                    {
                        name: "Mouse Gaming",
                        description: "Mouse canggih untuk bermain game",
                        price: 98000,
                        Category: {
                            connect: {
                                id: 1
                            }
                        }
                    },
                    {
                        name: "Keyboard Gaming",
                        description: "Keyboard canggih untuk bermain game",
                        price: 440000,
                        image: "1.webp",
                        Category: {
                            connect: {
                                id: 1
                            }
                        }
                    }
                ]
            }
        },
    })

    // console.log({ createCategories, user1 })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })