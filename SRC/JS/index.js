const botaoTrailer = document.querySelector(".botao");
const botaoFecharModal = document.querySelector(".fechar-modal");
const  modal = document.querySelector(".modal");
const  video = document.getElementById("video");
const  linkDoVideo = video.src;


function  aleternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    aleternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    aleternarModal();
    video.setAttribute("src", "");
});