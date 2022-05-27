var Scripts = {

    Init: () => {
        Scripts.Events.Init();
    },

    Events: {
        Init: () => {
            $('body').on("click", "#loginBtn", Scripts.Events.onClickLoginBtn);
            $('body').on("click", "#registerBtn", Scripts.Events.onClickRegisterBtn);
            $('body').on("click", "#logoutBtn", Scripts.Events.onClickLogoutBtn)
        },

        onClickLoginBtn: async () => {
            const base_url = window.location.origin;
            // $.post(base_url + "/login", $('#loginForm').serializeArray(), function(json) {
            //     console.log(json);
            // });
            const formData = $('#loginForm').serializeArray()
            const userData = {
                "email": formData[0].value,
                "password": formData[1].value
            }

            console.log(userData);
            console.log(JSON.stringify(userData));

            await fetch(`${base_url}/user/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            }).then(response => response.json())
                .then(data => {
                    if (data.code === 401) {
                        document.getElementById('loginModalErrorMessage').innerHTML= `<p style="color: red;">${data.message} </p>`
                        return console.log(data.message);
                    }
                    localStorage.setItem('user', JSON.stringify(data)),
                    console.log(data)
                    location.reload()
                })
                .catch(error => console.log(error))
        },
        onClickRegisterBtn: () => {
            const base_url = window.location.origin;
            $.post(base_url + "/user/register", $('#registerForm').serializeArray(), function (json) {
                console.log(json);
            });

        },

        onClickLogoutBtn: () => {
            localStorage.clear();
            location.reload()
        }

    }

}


 let accountArea = document.getElementById('account-area')
// accountArea.innerHTML = '<strong>selam</strong>'
function deneme () {
    if (localStorage.getItem("user") !== null) { 
        console.log("kontrol çalıştı");
        const htmlContent = '<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Kullanıcı Profili</button>'+ '&nbsp' + 
        '<button type="button" id="logoutBtn" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Çıkış Yap</button>'
        return accountArea.innerHTML = htmlContent 
    }

    console.log("fonksiyon çalıştı");
    return accountArea.innerHTML
}

     deneme()