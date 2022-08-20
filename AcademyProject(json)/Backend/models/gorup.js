const fs = require('fs/promises');
const path = require('path');
const User = require("./user");

class Group {
    constructor(name, teacherId) {
        this.name = name;
        this.teacher_id = teacherId;
    }

    static async getByTeacherId(teacherId) {
        const groupBuffer = await fs.readFile(path.join(__dirname, '../dbs/groups.json'));
        const groupJson = groupBuffer.toString();

        if (!groupJson) {
            return;
        }
        const groups = JSON.parse(groupJson);

        const filteredGroup = groups.find((group) => group.teacher_id === teacherId);
        const teacher = await User.getById(filteredGroup.teacher_id);

        return {
            ...filteredGroup,
            teacher
        }
    }

    static async getById(id) {
        const groupBuffer = await fs.readFile(path.join(__dirname, '../dbs/groups.json'));
        const groupJson = groupBuffer.toString();

        if (!groupJson) {
            return;
        }
        const groups = JSON.parse(groupJson);

        return groups.find((group) => group.id === id);
    }

    static async getAll() {
        const groupBuffer = await fs.readFile(path.join(__dirname, '../dbs/groups.json'));
        const groupJson = groupBuffer.toString();

        if (!groupJson) {
            return [];
        }

        return JSON.parse(groupJson);
    }

    async save() {
        const groupBuffer = await fs.readFile(path.join(__dirname, '../dbs/groups.json'));
        const groupJson = groupBuffer.toString();

        let groups = !groupJson ? [] : JSON.parse(groupJson);
        this.id = groups.length + 1;
        groups.push(this);

        await fs.writeFile(path.join(__dirname, '../dbs/groups.json'), JSON.stringify(groups));
    }
}

module.exports = Group;