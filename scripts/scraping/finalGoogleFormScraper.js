function extractQuestions(){
    const questionsList = document.querySelectorAll("div.freebirdFormviewerComponentsQuestionBaseHeader");
    //const questionsList = document.querySelectorAll("div.freebirdFormviewerViewItemsItemItemHeader")  //for a google form like a quiz response sheet
    var count = 0;
    if(count == 0){
    for(var i = 0; i < questionsList.length; i++){
        var question_html = questionsList[i];
        var regex = /(<([^>]+)>)/ig
        ,   body = question_html.innerHTML
        ,   result = body.replace(regex, "");

        console.log(result);
        
    }
    count++;
    }
    else{
        close();    
    }

    //setTimeout(extractQuestions, 5);

}

extractQuestions()




