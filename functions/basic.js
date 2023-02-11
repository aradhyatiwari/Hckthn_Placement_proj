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

        try {
            let clause = new Basic()
            if (what == "student") {
                await prisma.$connect();
                await prisma.student.findmany({
                    where: clause.qry(qry)
                }
                )
            }
            if (what == "employer") {
                await prisma.$connect();
                await prisma.employer.findmany({
                    where: clause.qry(qry)
                })
            }
            if (what == "skills") {
                await prisma.$connect();
                await prisma.skills.findmany({
                    where: clause.qry(qry)
                })
            }

            await prisma.$disconnect()
        } catch (e) {
            console.log("Error Getting Data from server ====>" + e);
        }
    }
}
export default Basic