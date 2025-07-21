//GET Dashboard
exports.dashboard = async(req,res) =>{
    const locals ={
        title: 'Dashboard',
        description:'Free NodeJs Notes App'
    };


res.render('dashboard/index',{
    locals,
    layout:'layouts/dashboard'
});
}
