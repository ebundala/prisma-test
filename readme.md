## Info
I get an unexpected behavior using prisma generate whereby the generated client doesn`t include create method for some models.
included is the exactly schema i have used 
i dont know if the problem is the schema or it might be a regression bug as the same schema was working prior to prisma 2.20.0 .
i have tested on 2.20.1 and 2.23.0 with same result. i havent tested on older versions prior to 2.20.1 

## Reproduction steps
### 1. generate client first by running 
  ```yarn run prisma generate```

### 2. inspect the generated client 
  it miss create method on some models  
   ``` Order, ServiceCategory and Service ```

   example code
   ```
   import { PrismaClient } from '@prisma/client'


        const prisma = new PrismaClient()


        // A main function so that you can use async/await

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

   ```