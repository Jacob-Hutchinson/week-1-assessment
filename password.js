
// reader.question("welcome", function(input){
    //     let password = window.prompt("enter password here:")
    
    //    if(password.length < 10){
        //        console.log("successful")
        //    }else{
            //        console.log("failure")
            //    }
            
            // });

            const { Console } = require('console');
            const readline = require('readline');
            
            const reader = readline.createInterface({
              input: process.stdin,
              output: process.stdout,
            });
            
            reader.question("Welcome, " + "please enter password", function(answer) {
                
                
                



                // if(answer.length >= 20 && answer.length > 10){
                //     console.log("strong password")
                // }else if(answer.length > 10){
                //     console.log("success")
                // }else if( answer.length === 0){
                //     console.log("please enter password")
                // }
                // else{
                //     console.log("failure")
                // }
                console.log(answer);
                reader.close() 
                // will close the program
            });
            
