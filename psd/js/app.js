$(document).ready(function () {
    $('.button-portfolio[filter="web"]').click(function () {
        if ($(this).attr('see')=='off') {
            $('.button-portfolio[filter]').attr('see', 'off');
            $(this).attr('see', 'on');
            $('.row-portfolio > div').hide(300);
            $('.row-portfolio > div[filter="web"]').show(300);
        }
    });

    $('.button-portfolio[filter="ui"]').click(function () {
        if ($(this).attr('see')=='off') {
            $('.button-portfolio[filter]').attr('see', 'off');
            $(this).attr('see', 'on');
            $('.row-portfolio > div').hide(300);
            $('.row-portfolio > div[filter="ui"]').show(300);
        }
    });

    $('.button-portfolio[filter="mockups"]').click(function () {
        if ($(this).attr('see')=='off') {
            $('.button-portfolio[filter]').attr('see', 'off');
            $(this).attr('see', 'on');
            $('.row-portfolio > div').hide(300);
            $('.row-portfolio > div[filter="mockups"]').show(300);
        }
    });

    $('.button-portfolio[filter="all"]').click(function () {
        if ($(this).attr('see')=='off') {
            $('.button-portfolio[filter]').attr('see', 'off');
            $(this).attr('see', 'on');
            $('.row-portfolio > div').show(300);
        }
    })
});