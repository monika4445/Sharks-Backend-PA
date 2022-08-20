const User = require("../models/user");
const Group = require("../models/gorup");

async function home(req, res) {
    const user = req.session.user;

    if (user.role === 1) {
        const groups = Group.getByTeacherId(user.id);

        return res.render('home-teacher', {
            page_tab: 'home',
            user_name: user.name,
            avatar_name: user.image_name,
            groups,
        })

    } else if (user.role === 2) {
        const teachers = await User.getByRole(1);
        return res.render('home-student', {
         page_tab: 'home',
         user_name: user.name,
         avatar_name: user.image_name,
         teachers,
        })
    }

    const teachers = await User.getByRole(1);

    return res.render('home-admin', {
        page_tab: 'home',
        user_name: user.name,
        avatar_name: user.image_name,
        teachers,
    });
}


module.exports = {
    home,
}