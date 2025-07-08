//GET Hompage

exports.homepage = async(req,res) =>{
    const locals ={
        title: 'NodeJs Note',
        description:'Free NodeJs Notes App'
    };


res.render('index',locals);
}

//GET About

exports.about = async(req,res) =>{
    const locals ={
        title: 'About - NodeJs Note',
        description:'Free NodeJs Notes App'
    };


res.render('about',locals);
}