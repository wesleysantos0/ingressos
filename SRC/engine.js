
//  Buscando o elemento Lista 
  const lista = document.querySelectorAll('.lista');

        function ativarlink() {
            lista.forEach(i => i.classList.remove('ativo'));
            this.classList.add('ativo');

            const index = Array.from(lista).indexOf(this);
            localStorage.setItem('abaAtiva', index);

            const href = this.querySelector('a').getAttribute('href');
            if (href) window.location.hash = href;
        }

        lista.forEach(i => i.addEventListener('click', ativarlink));

        window.addEventListener('DOMContentLoaded', () => {
            const salvo = localStorage.getItem('abaAtiva');
            const index = salvo !== null ? parseInt(salvo) : 0;

            if (lista[index]) {
                lista[index].classList.add('ativo');
            }
        });
