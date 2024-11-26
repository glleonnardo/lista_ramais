let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    let colaboradores = document.querySelectorAll(".colaborador");

    if (this.value.length > 0) {
        for (let i = 0; i < colaboradores.length; i++) {
            let buscaNome = colaboradores[i];
            let buscaDpt = colaboradores[i];
            let tdNome = buscaNome.querySelector(".info-nome");
            let tdDpt = buscaDpt.querySelector(".info-dpt");
            let dpt = tdDpt.textContent;
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome + dpt)) {
                buscaNome.classList.add("invisivel");
                buscaDpt.classList.add("invisivel");
            } else {
                buscaNome.classList.remove("invisivel");
                buscaDpt.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < colaboradores.length; i++) {
            let buscaNome = colaboradores[i];
            let buscaDpt = colaboradores[i];
            buscaNome.classList.remove("invisivel");
            buscaDpt.classList.remove("invisivel");
        }
    }
});
