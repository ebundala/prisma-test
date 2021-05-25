import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


// A `main` function so that you can use async/await

async function main() {

  prisma.order.create() // this is not defined
  prisma.serviceCategory.create() //this is not defined
  prisma.service.create() // this is not defined
  prisma.user.create()//this is defined
  prisma.location.create()//this has a geography field and is defined

}


main()

  .catch(e => {

    throw e

  })

  .finally(async () => {

    await prisma.$disconnect()

  })