$(document).ready(function() {

    function addTask() {
        const taskText = $('#task-input').val();

        if (taskText !== '') {
            const listItem = `<li>${taskText} <button class="remove-task">Remove</button></li>`;
            $('#task-list').append(listItem);
            $('#task-input').val('');
        }
    }


    $('#add-task').click(function() {
        addTask();
    });

    
    $('#task-input').keypress(function(event) {
        
        if (event.keyCode === 13) {
            addTask();
        }
    });

    
    $('#task-list').on('click', '.remove-task', function() {
        $(this).parent().remove();
    });
});
