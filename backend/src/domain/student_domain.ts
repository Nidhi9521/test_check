import { studentmodel } from "../model/student";
import express, { Express, Request, Response } from 'express'
class StudentDomain {

    async getAllStudent(req: Request, res: Response) {
        try {
            var studentData = await studentmodel.find();
            if (studentData.length != 0) {
                res.send(studentData);
                res.end();
            } else {
                res.send('Data Not Found')
                res.end();
            }
        } catch (e: any) {
            res.send(e.message);
            res.end();
        }
    }

    async postStudent(req: Request, res: Response) {
        try {
            var data = new studentmodel(req.body);
            await data.save();
            res.send('data saved success');
            res.end();
        } catch (e: any) {
            res.send(e.message);
            res.end();
        }
    }

    async updateStudent(req: Request, res: Response) {
        try {
            var data = req.body;
            await studentmodel.updateOne({_id:data._id},
                {$set:{student_name:data.student_name,percentage:data.percentage}})
            res.send('update saved success');
            res.end();
        } catch (e: any) {
            res.send(e.message);
            res.end();
        }
    }

    async deleteStudent(req: Request, res: Response) {
        try {
            await studentmodel.deleteOne({_id:req.params.id})
            res.send('Delete success');
            res.end();
        } catch (e:any) {
            res.send(e.message);
            res.end();
        }
    }
}
export { StudentDomain }