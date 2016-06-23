$(window).load(function() {

    var rosette = $('.container > [class*="rosette"]');
    var arrow = $('.click');
    var wholeRosette = $('.wholeRosette')[0];
    var toBeDesigned2 = $('.rosette4')[0];
    var bhagaskara = $('.rosette2')[0];
    var toBeDesigned = $('.rosette6')[0];
    var sitOnChair = $('.rosette8')[0];
    var container = $('.container')[0];

    var looper;
    var degrees = 0;
    var currentPosition = 45;
    var current = 45;

    function rotateAnimation(el, speed) {
        var elem = el;
        if (degrees < currentPosition) {
            elem.style.transformOrigin = '50vh 50vh';
            if (navigator.userAgent.match("Chrome")) {
                elem.style.WebkitTransform = "rotate(" + degrees + "deg)";
            } else if (navigator.userAgent.match("Firefox")) {
                elem.style.MozTransform = "rotate(" + degrees + "deg)";
            } else if (navigator.userAgent.match("MSIE")) {
                elem.style.msTransform = "rotate(" + degrees + "deg)";
            } else if (navigator.userAgent.match("Opera")) {
                elem.style.OTransform = "rotate(" + degrees + "deg)";
            } else {
                elem.style.transform = "rotate(" + degrees + "deg)";
            }
            looper = setTimeout(function() {
                rotateAnimation(el, speed);
            }, speed);
            degrees++;

        } else {
            currentPosition += 45;
            //console.log('currentPosition= '+currentPosition);
        }

        //document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
    }

    arrow.on('click', function() {
        //degrees=0;
        rotateAnimation(wholeRosette, 50);
        current += 45;
        if ((current % 360) == 135) {
            if (current > 360) {
                var remove1 = $('.container > .textView')[0];
                var remove2 = $('.container > .siteView1')[0];
                var remove3 = $('.rosette4 > .watch')[0];
                if (remove1 !== null) {
                    remove1.parentNode.removeChild(remove1);
                }
                if (remove2 !== null) {
                    remove2.parentNode.removeChild(remove2);
                }
                if (remove3 !== null) {
                    remove3.parentNode.removeChild(remove3);
                }
            }

            var watchText = $('<p>', {
                class: 'watch'
            }).text('Kliknij aby obejrzeć ->');
            $(bhagaskara).append(watchText);
            $(bhagaskara).on('click', function(event) {
                //console.log('yeah');
                $(container).css('left', '-200px');
                var textView = $('<a>', {
                    class: 'textView'
                }).text('Kliknij aby przejść ->').attr('href', 'sites/19.05warsztaty/index.html').attr('target', '_blank');
                var siteView = $('<iframe>', {
                    class: 'siteView1'
                }).attr('src', 'sites/19.05warsztaty/index.html');
                $(container).append(siteView);
                $(container).append(textView);

            });
        }
        if ((current % 360) == 225) {
            var remove1 = $('.container > .textView')[0];
            var remove2 = $('.container > .siteView1')[0];
            var remove3 = $('.rosette2 > .watch')[0];

            remove1.parentNode.removeChild(remove1);
            remove2.parentNode.removeChild(remove2);
            remove3.parentNode.removeChild(remove3);

            var watchText = $('<p>', {
                class: 'watch'
            }).text('Kliknij aby obejrzeć ->');
            $(sitOnChair).append(watchText);
            $(sitOnChair).on('click', function(event) {
                //console.log('yeah');
                $(container).css('left', '-200px');
                var textView = $('<a>', {
                    class: 'textView'
                }).text('Kliknij aby przejść ->').attr('href', 'sites/Warsztaty-JavaScript/index.html').attr('target', '_blank');
                var siteView = $('<iframe>', {
                    class: 'siteView1'
                }).attr('src', 'sites/Warsztaty-JavaScript/index.html');
                $(container).append(siteView);
                $(container).append(textView);

            });

        } else if ((current % 360) == 315) {
            var remove1 = $('.container > .textView')[0];
            var remove2 = $('.container > .siteView1')[0];
            var remove3 = $('.rosette8 > .watch')[0];

            remove1.parentNode.removeChild(remove1);
            remove2.parentNode.removeChild(remove2);
            remove3.parentNode.removeChild(remove3);

            var watchText = $('<p>', {
                class: 'watch'
            }).text('to be designed...');
            $(toBeDesigned).append(watchText);
            $(toBeDesigned).on('click', function(event) {
                //console.log('yeah');
                $(container).css('left', '-200px');
                var textView = $('<p>', {
                    class: 'textView'
                }).text('To be designed');
                var siteView = $('<iframe>', {
                    class: 'siteView1'
                }).text('<img src="images/cover.jpg">');
                $(container).append(siteView);
                $(container).append(textView);

            });

        } else if ((current % 360) == 45) {
            var remove1 = $('.container > .textView')[0];
            var remove2 = $('.container > .siteView1')[0];
            var remove3 = $('.rosette6 > .watch')[0];

            remove1.parentNode.removeChild(remove1);
            remove2.parentNode.removeChild(remove2);
            remove3.parentNode.removeChild(remove3);

            var watchText = $('<p>', {
                class: 'watch'
            }).text('to be designed...');
            $(toBeDesigned2).append(watchText);
            $(toBeDesigned2).on('click', function(event) {
                //console.log('yeah');
                $(container).css('left', '-200px');
                var textView = $('<a>', {
                    class: 'textView'
                }).text('To be designed');
                var siteView = $('<iframe>', {
                    class: 'siteView1'
                }).text('<img src="images/cover.jpg">');
                $(container).append(siteView);
                $(container).append(textView);

            });

        }
        console.log('current= ' + current);
    });

    var angle = [];
    for (var i = 1; i <= rosette.length; i++) {
        //pobieram kąt, pod którym znajduje się dany element
        var matrix = $(rosette[i]).css('transform');

        if (matrix == undefined) {
            angle[i - 1] = 45;
        } else {
            //console.log(matrix);
            var x = matrix.split("(")[1].split(")")[0].split(",")[0];
            var y = matrix.split("(")[1].split(")")[0].split(",")[1];
            var radians = Math.atan2(x, y);
            if (radians < 0) {
                radians += (2 * Math.PI);
            }
            //var angle = Math.round(radians * (180 / Math.PI));
            //console.log(values);
            //var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
            angle.push(Math.round(radians * (180 / Math.PI)));

        }
        //console.log('kat dla i=' + i + 'wynosi ' + angle[i - 1]);
        //$(rosette[i]).css('animation', 'spin 3s linear infinite');


    }
    //PORTFOLIO


    //SKILLS
    var percent = $('.percentbar');
    console.log(percent);
    $(window).on('scroll', function() {
        var skills = $('.column');
        var eTop = skills.offset().top;
        var diff = (eTop - $(window).scrollTop() - $(window).innerHeight());
        if (diff < 0) {
            $(percent).addClass('animate');
        }
    });


});
