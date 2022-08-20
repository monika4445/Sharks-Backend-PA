const fs = require('fs/promises');
const path = require('path');
const Group = require("./gorup");
const User = require("./user");

class GroupStudent {
    constructor(groupId, studentId) {
        this.group_id = groupId;
        this.student_id = studentId;
    }

    static async getByStudentId(studentId) {
        const groupStudentsBuffer = await fs.readFile(path.join(__dirname, '../dbs/group_students.json'));
        const groupStudentsJson = groupStudentsBuffer.toString();

        if (!groupStudentsJson) {
            return;
        }
        const groupStudents = JSON.parse(groupStudentsJson);

        return groupStudents.find((groupStudent) => groupStudent.student_id === studentId);
    }

    static async getByGroupId(groupId) {
        const groupStudentsBuffer = await fs.readFile(path.join(__dirname, '../dbs/group_students.json'));
        const groupStudentsJson = groupStudentsBuffer.toString();

        if (!groupStudentsJson) {
            return [];
        }
        const groupStudents = JSON.parse(groupStudentsJson);

        const filteredGroupStudents = groupStudents.filter((groupStudent) => groupStudent.group_id === groupId);

        return filteredGroupStudents.map(async (groupStudent) => {
            const group = await Group.getById(groupStudent.group_id);
            const student = await User.getById(groupStudent.student_id);

            return {
                ...groupStudent,
                group,
                student
            }
        })
    }

    async save() {
        const groupStudentsBuffer = await fs.readFile(path.join(__dirname, '../dbs/group_students.json'));
        const groupStudentsJson = groupStudentsBuffer.toString();

        let groupStudents = !groupStudentsJson ? [] : JSON.parse(groupStudentsJson);
        this.id = groupStudents.length + 1;
        groupStudents.push(this);

        await fs.writeFile(path.join(__dirname, '../dbs/group_students.json'), JSON.stringify(groupStudents));
    }
}

module.exports = GroupStudent;