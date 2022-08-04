import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    _id: {type: Number,required: true ,unique:true},
    student_name : {type: String,required : true},
    percentage : {type : Number,required:true}
});

const studentmodel = mongoose.model('student',StudentSchema);
export {studentmodel}