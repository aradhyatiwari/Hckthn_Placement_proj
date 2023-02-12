import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

class Basic {
    // returns query so that no null query is given into where clause 
    qry = (qry) => {
        let clauses = {}
        for (let key in qry) {
            if (qry[key])
                clauses[key] = qry[key]
        }
        return clauses
    }
    // Get data from database
    async gett(what, qry) {
        let resp = {};
        try {
            let clause = new Basic()
            if (what === "student") {
                await prisma.$connect();
                resp = await prisma.student.findMany({
                    where: clause.qry(qry)

                }
                )
                console.log("inside that func")

            }
            else if (what == "employer") {
                await prisma.$connect();
                resp = await prisma.employer.findMany({
                    where: clause.qry(qry)
                })
            }
            else {
                resp = { name: "Bhapp Chomu Sahi Request mar" }
            }
            await prisma.$disconnect()
            return resp
        } catch (e) {
            console.log("Error Getting Data from server ====>" + e);
        }
    }


    // Put data into database
    async putt(what, dta) {
        let insert
        try {
            await prisma.$connect()

            if (what == "student") {
                insert = await prisma.student.create({
                    data: dta,
                })
            }
            else if (what == "employee") {
                insert = await prisma.employer.create({
                    data: dta,
                })
            }
            else {
                insert = { error: "Choose correct table :-(" }
            }
            await prisma.$disconnect()


            return insert
        } catch (e) {
            await prisma.$disconnect()
            console.log("----------->" + e)
        }

    }
}
export default Basic