// pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
const characters = document.querySelectorAll('.character');

// adicionar a classe selected no personagem que o usuário passar o cursor do mouse
characters.forEach(character => {
    character.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        removerSelecaoDoPersonagem();

        character.classList.add('selected');

        alterarImagemPersonagemSelecionado(character);

        alterarNomePersonagemSelecionado(character);

        alterarDescricaoPersonagem(character);
    })
})

function alterarDescricaoPersonagem(character) {
    const descriptionCharacter = document.getElementById('character-description');
    descriptionCharacter.innerText = character.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(character) {
    const nameCharacter = document.getElementById('character-name');
    nameCharacter.innerText = character.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(character) {
    const imageCharacterBig = document.querySelector('.big-character');
    const idCharacter = character.attributes.id.value;
    imageCharacterBig.src = `./src/imagens/card-${idCharacter}.png`;
}

function removerSelecaoDoPersonagem() {
    const characterSelected = document.querySelector('.selected');
    characterSelected.classList.remove('selected');
}