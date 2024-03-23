$(document).ready(function(){
    var questions = [
        {
            question: "Who is known as the 'Master Blaster' in cricket?",
            options: ["Sachin Tendulkar", "Ricky Ponting", "Viv Richards", "Brian Lara"],
            answer: "Sachin Tendulkar"
        },
        {
            question: "Which country won the first-ever Cricket World Cup in 1975?",
            options: ["West Indies", "Australia", "England", "India"],
            answer: "West Indies"
        },
        {
            question: "What is the highest individual score by a batsman in Test cricket?",
            options: ["400", "375", "501", "400*"],
            answer: "400*"
        },
        {
            question: "Who holds the record for the highest individual score in One Day Internationals (ODIs)?",
            options: ["Sachin Tendulkar", "Rohit Sharma", "Virender Sehwag", "Chris Gayle"],
            answer: "Rohit Sharma"
        },
        {
            question: "Which cricketer has taken the most wickets in Test cricket?",
            options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "James Anderson"],
            answer: "James Anderson"
        },
        {
            question: "Who is the current captain of the Indian cricket team in Test matches?",
            options: ["Virat Kohli", "Rohit Sharma", "Ajinkya Rahane", "KL Rahul"],
            answer: "Virat Kohli"
        },
        {
            question: "Which cricketer has scored the most runs in a single edition of the ICC Cricket World Cup?",
            options: ["Sachin Tendulkar", "Ricky Ponting", "Kumar Sangakkara", "Shakib Al Hasan"],
            answer: "Sachin Tendulkar"
        },
        {
            question: "Who is the fastest bowler to reach 300 Test wickets?",
            options: ["Muttiah Muralitharan", "Shane Warne", "Richard Hadlee", "Dale Steyn"],
            answer: "Muttiah Muralitharan"
        },
        {
            question: "Which country won the ICC Champions Trophy in 2017?",
            options: ["India", "Pakistan", "Australia", "England"],
            answer: "Pakistan"
        },
        {
            question: "Who has the highest individual score in a T20 International match?",
            options: ["Aaron Finch", "Chris Gayle", "Rohit Sharma", "Colin Munro"],
            answer: "Aaron Finch"
        }
    ];

    // Render Quiz
    function renderQuiz() {
        var quizHTML = "";
        questions.forEach(function(q, index){
            quizHTML += "<div class='question'>" + (index + 1) + ". " + q.question + "</div>";
            q.options.forEach(function(option){
                quizHTML += "<div class='form-check'><input type='radio' class='form-check-input' name='question_" + index + "' value='" + option + "'><label class='form-check-label'>" + option + "</label></div>";
            });
        });
        $("#quiz").html(quizHTML);
    }

    renderQuiz();

    // Submit Answers
    $("#submit-btn").click(function(){
        var score = 0;
        questions.forEach(function(q, index){
            var selectedOption = $("input[name='question_" + index + "']:checked").val();
            if(selectedOption === q.answer) {
                score++;
            }
        });
        alert("Your score: " + score + "/" + questions.length);
    });
});
