import express from "express"

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const today = new Date();
    const day = today.getDay();

    var Theday="";
    var dayAdvice="";

    //console.log(day);
    switch (day) {
            case 0: Theday = "Sunday";
                dayAdvice = "It's weekday rest less work hard on yourself"
            
            break;  
            case 1: Theday = "Monday";
                dayAdvice = "Get Ready for Work/Study , We all know its hard but we have to do"
            
            break;
            case 2: Theday = "Tuesday";
                dayAdvice = "This day will go same as lastday , keep it up bro"
            
            break;
            case 3: Theday = "Wednessday";
                dayAdvice = "Chill we can do nothing , so just keep learning"
            
            break;
            case 4: Theday = "Thursday";
                dayAdvice = "Well done bro , Keep learning"
            
            break;
            case 5: Theday = "Friday";
                dayAdvice = "Wash your all Clothes , Clean youself, Go for jummah"
            
            break;
            case 6: Theday = "Saturday";
                dayAdvice = "Go somewhere explore things , try new things"
            
            break;      
    
        default:
            break;
    }

    res.render("index.ejs",{
        dayType : Theday,
        advice : dayAdvice,
    });
})


app.listen(port,()=>{
    console.log(`Server is running on ${port}.`)
})