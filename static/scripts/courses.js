$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.btn-hidden-toggle').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        var $hiddenToggleBtn = $(this);
        var $hiddenToggleIcon = $(this).find('.fa');
        $.ajax({
            method: 'PATCH',
            url: window.location.href + '/topics/' + $(this).attr('href') + '?json=true',
            data: {hidden: !$hiddenToggleIcon.hasClass('fa-eye-slash')},
            success: function(result) {
                if (result.hidden) {
                    $hiddenToggleIcon.addClass('fa-eye-slash');
                    $hiddenToggleIcon.removeClass('fa-eye');
                    $hiddenToggleBtn.attr('data-original-title', "Thema entsperren");
                } else {
                    $hiddenToggleIcon.removeClass('fa-eye-slash');
                    $hiddenToggleIcon.addClass('fa-eye');
                    $hiddenToggleBtn.attr('data-original-title', "Thema sperren");
                }
            }
        });
    });
});
