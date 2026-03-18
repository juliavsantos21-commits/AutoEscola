document.addEventListener("DOMContentLoaded", () => {
    // 1. Efeito de entrada (Fade In) ao carregar a página
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.4s ease-in-out";
    
    // Pequeno atraso para garantir que o CSS aplicou a opacidade 0 antes de mudar para 1
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 50);

    // 2. Efeito de saída (Fade Out) ao clicar em links
    const links = document.querySelectorAll("a");
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            // Verifica se o link tem um destino real (ignora links com '#' ou vazios)
            if (this.href && !this.href.includes('#') && this.target !== "_blank") {
                e.preventDefault(); // Impede o link de abrir imediatamente
                const destino = this.href;

                // Efeito visual no botão/link clicado (dá uma "piscada" ou diminui)
                this.style.transform = "scale(0.95)";
                this.style.transition = "transform 0.2s";

                // Apaga a página suavemente
                document.body.style.opacity = "0";

                // Espera a animação terminar (400 milissegundos) e manda para a próxima página
                setTimeout(() => {
                    window.location.href = destino;
                }, 400);
            }
        });
    });
});