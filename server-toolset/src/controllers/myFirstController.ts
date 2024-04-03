// Methods to be executed on routes 
const methodGet = (req: any, res: any) => {
    res.send("Hello, Welcome to our Page");
}

const methodPost = (req: any, res: any) => {
    res.send("Hello, This was a post Request");
}

// Export of all methods as object 
export default {
    methodGet,
    methodPost
}