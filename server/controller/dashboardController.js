//GET Dashboard
exports.dashboard = async (req, res) => {
  const locals = {
    title: 'Dashboard',
    description: 'Free NodeJs Notes App',
  };

  res.render('dashboard/index', {
    // userName:req.user.firstName,
    locals,
    layout: '../views/layouts/dashboard',
  });
};
