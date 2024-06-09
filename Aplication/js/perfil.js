document.addEventListener("DOMContentLoaded", function () {
    const buttonEditar = document.querySelector("#editar");
    const inputName = document.querySelector("#nome");
    const inputEmail = document.querySelector("#email");
    const inputTel = document.querySelector("#telefone");
    const inputPassword = document.querySelector("#senha");
    const buttonSalvar = document.querySelector("#salvar");
    


    function carregarDadosUsuario() {
        const dadosUsuarioJSON = localStorage.getItem('dadosUsuario');
        if (dadosUsuarioJSON) {
            const dadosUsuario = JSON.parse(dadosUsuarioJSON);
            inputName.value = dadosUsuario.nome || '';
            inputEmail.value = dadosUsuario.email || '';
            inputTel.value = dadosUsuario.telefone || '';
        }
    }

    carregarDadosUsuario();

    buttonEditar.addEventListener("click", function () {
        inputName.disabled = false;
        inputEmail.disabled = false;
        inputTel.disabled = false;
        inputPassword.disabled = false;
        buttonSalvar.disabled = false;
    });

    document.getElementById('upload').addEventListener('change', function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            localStorage.setItem('imagemSalva', e.target.result);
            document.getElementById('picture_img').src = e.target.result;
        };

        reader.readAsDataURL(file);
    });

    const imagemSalva = localStorage.getItem('imagemSalva');
    if (imagemSalva) {
        document.getElementById('picture_img').src = imagemSalva;
    }

    buttonSalvar.addEventListener("click", function (event) {
        event.preventDefault();
    
        if (!inputEmail.value.includes('@')) {
            alert("Por favor, insira um email válido.");
            return;
        }
    
        if (inputPassword.value.length < 8) {
            alert("Por favor, insira uma senha válida com pelo menos 8caracteres.");
            return;
        }
    
        
        const dadosUsuario = {
            nome: inputName.value,
            email: inputEmail.value,
            telefone: inputTel.value
        };
        localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
        alert("Dados salvos com sucesso!");
    
        inputName.disabled = true;
        inputEmail.disabled = true;
        inputTel.disabled = true;
        inputPassword.disabled = true;
        buttonSalvar.disabled = true;
    });


    

    });

