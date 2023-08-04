module.exports={
    devServer:{
        proxy:{
            '^app/login':{
                target: 'http://localhost:3030/login',
                changeOrigin:true
            }
        }
    }
}