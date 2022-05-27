var recipeApi = {

    Init:() => {
        recipeApi.Events.Init();
        recipeApi.getApi();
    },

    getApi:() => {
        const base_url = window.location.origin;

        $.get(base_url + "/getApi",null , function(json) {
            $('#recipeContainer').html("");
            $.each(json, function( index, value ) {
                // if(value.product_type=="eyeshadow")
                // {
                $('#recipeContainer').append(`<div class="anayemek-resim">
                <div class="anayemek-baslik"> 
                    <a href="../views/urunsitesi.html"   rel="noopener noreferrer">${value.name}</a>
                </div>
                <a href="../views/urunsitesi.html"   rel="noopener noreferrer">
                    <img src="${value.image}">
                </a>
            </div>`);
        // }
    });


    
        });
    },

    Events : {
        Init:() => {},
    }
}