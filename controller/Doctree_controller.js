module.exports= function(app)
{

    app.get('/',function(req,res)
{
    res.render('index');
});
    app.get('/index',function(req,res)
    {
        res.render('index');
    });
    app.get('/about_us',function(req,res)
    {
        res.render('about_us');
    });
    app.get('/contact',function(req,res)
    {
        res.render('contact');
    });    
};               