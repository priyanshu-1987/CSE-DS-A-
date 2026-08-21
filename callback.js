function Sum(a,b){
    return a+b
}
function SumwithMsg(callback,msg){
    const result=callback(20,30)
    const finalresult="Hi "+msg+" your score is :"+result
    console.log(finalresult);
    
    
}
SumwithMsg(Sum,"Priyanshu")
 function Password(username,pass){
    const username1="Priyanshu_1234"
    const password="Priyanshu@1234"
    if(username==username1 && password==pass){
        return "correct";
    }else {
        return "noncorrect";
    }
}
function match(callback1,name){
    const result1=callback1("Priyanshu_1234","Priyanshu@1234")
    console.log(`${name} your password or username is : ${result1}`)
}
match(Password,"Priyanshu")

