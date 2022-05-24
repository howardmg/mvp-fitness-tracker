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
        console.log(data)
    })
})

$viewAll.on('click', () => {
    let workoutDate = $('.tracker__date').val();
    console.log(workoutDate)
})

// Return and display a day's workout