$( function(e) {
    //pega a altura após redimensionar a tela, e aplica esta altura a cada um dos articles.
    function redimensionar(){
        var alturajanela = $(window).height();

        $("#inicio").css("height", alturajanela);
        $("#quemsomos").css("height", alturajanela);
        $("#nossosservicos").css("height", alturajanela);
        $("#contato").css("height", alturajanela);
        $("#saibamais").css("height", alturajanela);

    }
    // após o carregamento da página, aplica a chamada da função animate em cada item da navbar após serem clicados, deslizando a tela para o respectivo article destino.
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
    //atribui um paddind de bootstrap em cada article, para evitar que a navbar fixed sobreponha o conteudo
    $("main div article").attr("class","pt-md-5");

    // a cada redimensionamento da tela faz a chamada da função redimensionar
    $(window).resize(function(e){redimensionar();});
    //aplica uma primeira chamada da função redimensionar para determinar os valores do layout inicial.
    redimensionar();
});