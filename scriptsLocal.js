$( function(e) {

            function redimensionar(){
                var alturajanela = $(window).height();

                $("#inicio").css("height", alturajanela);
                $("#quemsomos").css("height", alturajanela);
                $("#nossosservicos").css("height", alturajanela);
                $("#contato").css("height", alturajanela);
                $("#saibamais").css("height", alturajanela);

            }

            $("nav div ul li:nth-child(1)").click(function(e){
                $("html, body").animate({scrollTop:$("#inicio").offset().top}, 1000);
            });

            $("nav div ul li:nth-child(2)").click(function(e){
                $("html, body").animate({scrollTop:$("#quemsomos").offset().top}, 1000);
            });

            $("nav div ul li:nth-child(3)").click(function(e){
                $("html, body").animate({scrollTop:$("#nossosservicos").offset().top}, 1000);
            });

            $("nav div ul li:nth-child(4)").click(function(e){
                $("html, body").animate({scrollTop:$("#contato").offset().top}, 1000);
            });

            $("nav div ul li:nth-child(5)").click(function(e){
                $("html, body").animate({scrollTop:$("#saibamais").offset().top}, 1000);
            });

            $(window).resize(function(e){redimensionar();});
            redimensionar();
        });	