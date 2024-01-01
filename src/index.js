const express=require('express')
const bodyParser=require('body-parser')
const {PORT}=require('./config/serverConfig')
const apiRoutes=require('./routes/index')

// const {User}=require('./models/index')
// const bcrypt=require('bcrypt')
// const UserRepository=require('./repository/user-repository')

// const UserService=require('./services/user-service')

const app=express();


const prepareAndStartServer=()=>{

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started on PORT : ${PORT}`);
        // const repo=new UserRepository();
        // const response=await repo.getById(1);
        // console.log(response);
        // const incomingPassword = '123456';
        // const user=await User.findByPk(3);
        // const response=bcrypt.compareSync(incomingPassword,user.password)
        // console.log(response)

        // const service = new UserService();
        // const newToken=service.createToken({email:'varun@admin.com',id:1})
        // console.log("new token is",newToken)

        // const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhcnVuQGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE3MDQxMTMyNjgsImV4cCI6MTcwNDExMzI5OH0.wWsHKKv4yOxHfQyKlNbGcapi0X5nv4neRewpAgDgmaY'
        // const response=service.verfiyToken(token);
        // console.log(response);
    });
}

prepareAndStartServer();