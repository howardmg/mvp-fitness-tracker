// Buttons
const $addEntry = $('.tracker__add');
const $deleteEntry = $('#tracker__button');
const $viewAll = $('#displayAll_btn');
const $viewOne = $('#displayOne_btn');

// Event Listeners
$addEntry.on('click', () => {
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

            if (data[i].muscle_group !== null){
                var $muscleGroup = $('<li>').addClass('muscle-group').text("Muscle Group: " + `${data[i].muscle_group}`);
                $muscleGroup.appendTo($ul);
              }
    
            // if (show.genres !== null){
            //   var $h2 = $('<h2></h2>').addClass('card-generes').text(`${show.genres.join(', ')}`);
            //   $h2.appendTo($resultCard);
            // }
      
            // if (show.summary !== null){
            //   var $summaryDiv = $('<div></div>').addClass('card-summary')
            //   $('<em></em>').text('Summary:').appendTo($summaryDiv);
      
            //   var summaryText = show.summary;
            //   $(summaryText).appendTo($summaryDiv);
      
            //   $summaryDiv.appendTo($resultCard);
            // }
            
            // if (show.url !== null){
            //   var $link = $('<a>Visit Show</a>').attr('href', show.url);
            //   $link.appendTo($resultCard);
            // }
      
            $resultCard.appendTo('.results');
          }
    })
})

// $viewAll.on('click', () => {
//     let workoutDate = $('.tracker__date').val();
//     console.log(workoutDate)
// })

// Return and display a day's workout