let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    let colaboradores = document.querySelectorAll(".colaborador");

    if (this.value.length > 0) {
        for (let i = 0; i < colaboradores.length; i++) {
            let colaborador = colaboradores[i];
            let tdNome = colaborador.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                colaborador.classList.add("invisivel");
            } else {
                colaborador.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < colaboradores.length; i++) {
            let colaborador = colaboradores[i];
            colaborador.classList.remove("invisivel");
        }
    }
});

/*let campoFiltro2 = document.querySelector("#filtrar-tabela");

campoFiltro2.addEventListener("input", function() {
    let departamentos = document.querySelectorAll(".colaborador");

    if (this.value.length > 0) {
        for (let i = 0; i < departamentos.length; i++) {
            let buscaDpt = departamentos[i];
            let tdDepartamento = buscaDpt.querySelector(".info-departamento");
            let departamento = tdDepartamento.textContent;
            let expressao2 = new RegExp(this.value, "i");

            if (!expressao2.test(departamento)) {
                buscaDpt.classList.add("invisivel");
            } else {
                buscaDpt.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < departamentos.length; i++) {
            let buscaDpt = departamentos[i];
            buscaDpt.classList.remove("invisivel");
        }
    }
});
*/