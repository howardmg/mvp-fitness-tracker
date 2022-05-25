// Buttons
const $addEntry = $('.tracker__add');
const $deleteEntry = $('#tracker__button');
const $viewAll = $('#displayAll_btn');
const $viewOne = $('#displayOne_btn');

// Event Listeners
$viewAll.on('click', () => {
    let date = $('.tracker__date').val();
    let type = $('.tracker__type').val();
    let muscleGroup = $('.tracker__muscle-group').val();
    let exercise = $('.tracker__exercise').val();
    let sets = $('.tracker__sets').val();
    let reps = $('.tracker__reps').val();
    let weight = $('.tracker__weight').val();
    let duration = $('.tracker__duration'). val();

    $.get('https://warm-basin-09430.herokuapp.com/test', (data) => {
        console.log(data);

        for (var i = 0; i < data.length; i++){
            var $resultCard = $('<div></div>').addClass('result-card')

            var $ul = $('<ul></ul>').addClass('workout')
            $ul.appendTo($resultCard)

            // Add date info, append to ul
            var $date= $('<li>').addClass('date').text("Date: " + `${data[i].date}`);
            $date.appendTo($ul);

            // Add workout type info, append to ul
            var $type = $('<li>').addClass('type').text("Type: " + `${data[i].type}`);
            $type.appendTo($ul);

            // Add muscle group info, append to ul
            if (data[i].muscle_group !== null){
                var $muscleGroup = $('<li>').addClass('muscle-group').text("Muscle Group: " + `${data[i].muscle_group}`);
                $muscleGroup.appendTo($ul);
            }

            // Add exercise info, append to ul
            var $exercise = $('<li>').addClass('exercise').text("Exercise: " + `${data[i].exercise_name}`);
            $exercise.appendTo($ul);

            // Add sets info, if applicable, append to ul
            if (data[i].sets !== null){
                var $sets = $('<li>').addClass('sets').text("Sets: " + `${data[i].sets}`);
                $sets.appendTo($ul);
            }

            // Add reps info, if applicable, append to ul
            if (data[i].reps !== null){
                var $reps = $('<li>').addClass('reps').text("Reps: " + `${data[i].reps}`);
                $reps.appendTo($ul);
            }

            // Add strength conditioning weight info, if applicable, append to ul
            if (data[i].totat_weight !== null){
                var $weight = $('<li>').addClass('weight').text("Heaviest Weight: " + `${data[i].total_weight}`);
                $weight.appendTo($ul);
            }

            // Add workout duration info, if applicable, append to ul
            if (data[i].duration !== null){
                var $duration = $('<li>').addClass('duration').text("Duration/Time: " + `${data[i].duration}`);
                $duration.appendTo($ul);
            }
      
            $resultCard.appendTo('.results');
          }
    })
})

// $viewAll.on('click', () => {
//     let workoutDate = $('.tracker__date').val();
//     console.log(workoutDate)
// })

// Return and display a day's workout