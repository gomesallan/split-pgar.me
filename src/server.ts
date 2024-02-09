import index from './index' 

index.listen(process.env.PORT || 3000, () => console.log("Server is runing"))   