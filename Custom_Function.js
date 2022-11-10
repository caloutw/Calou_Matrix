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

function Detect_Tab(element,event){
  //alert("You Click Tab!");
  if (e.keyCode == 9) {
    e.preventDefault();
    var start = element.selectionStart;
    var end = element.selectionEnd;
    element.value = element.value.substring(0, start) + "\t" + element.value.substring(end);
    element.selectionStart = element.selectionEnd = start + 1;
  }
}

window.onload = function(){
  input_basic_tip(document.getElementById("editing"));
}

function input_basic_tip(element){
  element.value = "function main_function(){" + "\n" +
  "\t" + "//Put Your Script There" + "\n" +
  "}"
}

async function Start_Book_Function(){
    if(Easter_eggs == 10){
        alert("Are you challenge me?");
    }
    reset_answer_Box();
    let Read_Script = document.getElementById("editing").value;
    var output_result = "=== Script Start ===\n";
    try {
            Function_Data = "";
            output_result += "Result:" + "\n";
            output_result += eval(Read_Script + "main_function();") + "\n";
            output_result += "\n";
            output_result += "Process:" + "\n";
            output_result += Read_Script + "\n";
            document.getElementById("result").style = "color:green";  
    } 
    catch( ex ) {
        Easter_eggs += 1;
        output_result += "Error:" + "\n";
        output_result += "Script Have Error(Error Code 2)" + "\n";
        output_result += "\n";
        output_result += "Process:" + "\n";
        output_result += ex + "\n";
        document.getElementById("result").style = "color:red";
    }

    output_result += "=== Script End ===";
    document.getElementById("result").value = output_result;
    
}