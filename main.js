var Easter_eggs = 0;
function close_answer_box(){
    document.getElementById("Answer_Page").style = "opacity: 0;transition: .1s;pointer-events: none;";
}

function show_answer_box(input_Topic,input_Topic_Part){
    reset_answer_Box();
    document.getElementById("select_Topic").innerText = input_Topic;
    document.getElementById("select_Topic_Part").innerText = input_Topic_Part;
    document.getElementById("Answer_Page").style = "";
}

function reset_answer_Box(){
    document.getElementById("result").innerText = "";
}

async function Start_Book_Function(){
    if(Easter_eggs == 10){
        alert("Are you challenge me?");
    }
    reset_answer_Box();
    var Topic_Getch = document.getElementById("select_Topic").innerText.replace("Topic ","");
    var Topic_Part_Getch = document.getElementById("select_Topic_Part").innerText;
    var Read_Script = "";
    var output_result = "=== Script Start ===\n";
    try {
        await fetch('Linear_Algebra_Book/' + Topic_Part_Getch + Topic_Getch + '.txt')
            .then((response) => response.text())
            .then((data) => Read_Script = data);
            var Function_Data = eval(Read_Script);
            output_result += "Result:" + "\n";
            output_result += eval(Function_Data.RunScript) + "\n";
            output_result += "\n";
            output_result += "Process:" + "\n";
            output_result += Function_Data.RunScript + "\n";
            document.getElementById("result").style = "color:green";  
    } 
    catch( ex ) {
        Easter_eggs += 1;
        output_result += "Error:" + "\n";
        output_result += "Can't Load File, File is Not Exist(Error Code 1)" + "\n";
        output_result += "\n";
        output_result += "Process:" + "\n";
        output_result += ex + "\n";
        document.getElementById("result").style = "color:red";
    }

    output_result += "=== Script End ===";
    document.getElementById("result").innerText = output_result;
    
}