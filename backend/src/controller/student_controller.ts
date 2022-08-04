import { StudentDomain } from "../domain/student_domain";
import express, { Express, Request, Response } from 'express';
var router = express.Router();

class StudentController{

    static async getAllstudent(req:Request,res:Response) {
        const studentDomain=new StudentDomain();
        await studentDomain.getAllStudent(req,res);
    }

    static async postStudent(req:Request,res:Response) {
        const studentDomain=new StudentDomain();
        await studentDomain.postStudent(req,res);
    }

    static async putStudent(req:Request,res:Response) {
        const studentDomain=new StudentDomain();
        await studentDomain.updateStudent(req,res);
    }

    static async deleteStudent(req:Request,res:Response) {
        const studentDomain=new StudentDomain();
        await studentDomain.deleteStudent(req,res);
    }

}
router.get('/',StudentController.getAllstudent);
router.post('/',StudentController.postStudent);
router.put('/',StudentController.putStudent);
router.delete('/:id',StudentController.deleteStudent);

export {router};