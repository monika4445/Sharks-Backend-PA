const User = require("../models/user");
const Group = require("../models/gorup");
const GroupStudent = require("../models/gorup-student");

async function createGroup(req, res) {
    const groupName = req.body.name || '';
    const teacherId = req.body.teacher_id || 0;

    // TODO create validators

    const newGroup = new Group(groupName, teacherId);
    await newGroup.save();

    const groups = await Group.getAll();
    const teachers = await User.getByRole(1);


    return res.render('home-admin', {
        page_tab: 'home',
        user_name: req.session.user.name,
        avatar_name: req.session.user.image_name,
        teachers,
        groups
    });
}

async function groupsIndex(req, res) {
    const groups = await Group.getAll();
    const teachers = await User.getByRole(1);

    return res.render('home-admin', {
        page_tab: 'home',
        user_name: req.session.user.name,
        avatar_name: req.session.user.image_name,
        teachers,
        groups
    });
}

async function index(req, res) {
    const groupId = req.params.groupId;
    const group = await Group.getById(groupId);
    const students = await User.getFreeStudents();
    const groupStudents = await GroupStudent.getByGroupId(groupId);

    return res.render('group', {
        page_tab: 'home',
        user_name: req.session.user.name,
        avatar_name: req.session.user.image_name,
        groupStudents,
        group,
        students
    });
}


module.exports = {
    createGroup,
    groupsIndex,
    index
}