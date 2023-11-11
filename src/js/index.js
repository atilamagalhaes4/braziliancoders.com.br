const search = document.getElementById("botaoSearch");
const formSearch = document.getElementById("formSearch");



formSearch.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(search.value);

});


const siteOpcao = document.getElementById("site-servicos_Li");
const appOpcao = document.getElementById("apps-servicos_Li");
const ecommerceOpcao = document.getElementById("ecommerce-servicos_Li");
const outrosOpcao = document.getElementById("outros-servicos_Li");


let sites = document.getElementById("criacao-sites-banner");
let ecommerce = document.getElementById("criacao-ecommerce-banner");
let aplicativo = document.getElementById("criacao-aplicativo-banner");
let outros = document.getElementById("criacao-outros-banner");

siteOpcao.addEventListener("click", function () {
    sites.style.display = "";
    ecommerce.style.display = "none";
    aplicativo.style.display = "none";
    outros.style.display = "none";

    
    document.getElementById("criacao-sites-imagens").classList.add('animate__slideInLeft');
    document.getElementById("criacao-aplicativo-imagens").classList.remove('animate__slideInLeft');
    document.getElementById("criacao-ecommerce-imagens").classList.remove('animate__slideInLeft');
    document.getElementById("criacao-outros-imagens").classList.remove('animate__slideInLeft');


    siteOpcao.style.color = "#41EAD4";
    appOpcao.style.color = "rgba(255, 255, 255, 0.5)";
    ecommerceOpcao.style.color = "rgba(255, 255, 255, 0.5)";
    outrosOpcao.style.color = "rgba(255, 255, 255, 0.5)";
});

appOpcao.addEventListener("click", function () {
    sites.style.display = "none";
    ecommerce.style.display = "none";
    aplicativo.style.display = "";
    outros.style.display = "none";

    document.getElementById("criacao-sites-imagens").classList.remove('animate__fadeIn');
    document.getElementById("criacao-aplicativo-imagens").classList.add('animate__fadeIn');
    document.getElementById("criacao-ecommerce-imagens").classList.remove('animate__fadeIn');
    document.getElementById("criacao-outros-imagens").classList.remove('animate__fadeIn');

    siteOpcao.style.color = "rgba(255, 255, 255, 0.5)";
    appOpcao.style.color = "#41EAD4";
    ecommerceOpcao.style.color = "rgba(255, 255, 255, 0.5)";
    outrosOpcao.style.color = "rgba(255, 255, 255, 0.5)";
});

ecommerceOpcao.addEventListener("click", function () {
    sites.style.display = "none";
    ecommerce.style.display = "";
    aplicativo.style.display = "none";
    outros.style.display = "none";

    document.getElementById("criacao-sites-imagens").classList.remove('animate__fadeIn');
    document.getElementById("criacao-aplicativo-imagens").classList.remove('animate__fadeIn');
    document.getElementById("criacao-ecommerce-imagens").classList.add('animate__fadeIn');
    document.getElementById("criacao-outros-imagens").classList.remove('animate__fadeIn');

    siteOpcao.style.color = "rgba(255, 255, 255, 0.5)";
    appOpcao.style.color = "rgba(255, 255, 255, 0.5)";
    ecommerceOpcao.style.color = "#41EAD4";
    outrosOpcao.style.color = "rgba(255, 255, 255, 0.5)";
});

outrosOpcao.addEventListener("click", function () {
    sites.style.display = "none";
    ecommerce.style.display = "none";
    aplicativo.style.display = "none";
    outros.style.display = "";


    document.getElementById("criacao-sites-imagens").classList.remove('animate__zoomIn');
    document.getElementById("criacao-aplicativo-imagens").classList.remove('animate__zoomIn');
    document.getElementById("criacao-ecommerce-imagens").classList.remove('animate__zoomIn');
    document.getElementById("criacao-outros-imagens").classList.add('animate__zoomIn');

    siteOpcao.style.color = "rgba(255, 255, 255, 0.5)";
    appOpcao.style.color = "rgba(255, 255, 255, 0.5)";
    ecommerceOpcao.style.color = "rgba(255, 255, 255, 0.5)";
    outrosOpcao.style.color = "#41EAD4";
});

siteOpcao.click();

let fotosSite = [
    "./src/assets/img/criacao-sites/web-design-online_53876-95309.avif",
    "./src/assets/img/criacao-sites/conceito-de-programacao-de-navegacao-de-tecnologia-de-design-web_53876-163260.avif",
    "./src/assets/img/criacao-sites/dispositivos-aereos-de-revistas-eletronicas_72104-2147.avif",
    "./src/assets/img/criacao-sites/conceito-de-negocios-online-homem-usando-um-laptop-com-software-de-design-grafico-na-tela_72104-3897.avif"
]
let fotosAplicativo = [
    "./src/assets/img/mobile/designers-criam-uma-interface-de-usuario-para-telefones-celulares_8119-2674.avif",
    "./src/assets/img/mobile/maos-de-alto-angulo-segurando-papel_23-2149930977.jpg",
    "./src/assets/img/mobile/os-designers-da-interface-do-usuario-da-web-estao-desenvolvendo-um-aplicativo-para-smartphones-a-equipe-de-criadores-esta-trabalhando-em-uma-interface-.avif",
    "./src/assets/img/mobile/desenvolvedor-de-ux-e-designer-de-interface-do-usuario-fazendo-brainstorming-sobre-design-de-wireframe-de-interface-de-aplicativo-movel-com-resumo-do-c.avif"
]
let fotosEcommerce = [
    "./src/assets/img/ecommerce/conceito-financeiro-de-estrategia-de-marketing-comercial-de-comercio_53876-121544.jpg",
    "./src/assets/img/ecommerce/guarda-roupa-digital-em-tela-transparente_53876-105380.jpg",
    "./src/assets/img/ecommerce/ilustracao-da-loja-online-renderizacao-em-3d_419924-174.avif",
    "./src/assets/img/ecommerce/mulher-fazendo-compras-on-line-no-laptop-e-pagando-por-mercadorias-compradas-com-cartao-de-credito_746318-997.avif"
]

let fotosOutros = [
    "./src/assets/img/manutencao/empresario-segurando-tablet-com-icone-inclui-operador-de-telefone-de-torque-de-chave-e-e-mail-para-centro-de-atendimento-ao-cliente-e-conceito-de-r.avif",
    "./src/assets/img/manutencao/vista-superior-do-hacker-irreconhecivel-realizando-ataque-cibernetico-a-noite_1098-18706.avif",
    "./src/assets/img/manutencao/ilustracao-do-conceito-de-atualizacao-do-sistema-operacional_114360-8293.avif",
    "./src/assets/img/manutencao/chave-inglesa-e-chave-de-fenda-no-teclado-do-computador_220873-54.jpg"
]


let fotoAtualSite = 0;
const imagemSite = document.getElementById('imagem-site-principal');

function mudarFoto(delta) {
    fotoAtualSite += delta;

    if (fotoAtualSite < 0) {
        fotoAtualSite = fotosSite.length - 1;
    } else if (fotoAtualSite >= fotosSite.length) {
        fotoAtualSite = 0;
    }

    // Define a opacidade para 0 antes de mudar a imagem
    imagemSite.style.opacity = 0;

    // Muda a imagem após um breve momento
    setTimeout(() => {
        imagemSite.src = fotosSite[fotoAtualSite];
        // Define a opacidade de volta para 1 após a imagem ser carregada
        imagemSite.style.opacity = 1;
    }, 50); // Tempo breve o suficiente para que a opacidade atinja 0 antes da imagem mudar
}

mudarFoto(0);



let fotoAtualApp = 0;
const imagemApp = document.getElementById('imagem-aplicativo-principal');
function mudarFoto2(delta) {
    fotoAtualApp += delta;

    if (fotoAtualApp < 0) {
        fotoAtualApp = fotosAplicativo.length - 1;
    } else if (fotoAtualApp >= fotosAplicativo.length) {
        fotoAtualApp = 0;
    }

    // Define a opacidade para 0 antes de mudar a imagem
    imagemApp.style.opacity = 0;

    // Muda a imagem após um breve momento
    setTimeout(() => {
        imagemApp.src = fotosAplicativo[fotoAtualApp];
        // Define a opacidade de volta para 1 após a imagem ser carregada
        imagemApp.style.opacity = 1;
    }, 50); // Tempo breve o suficiente para que a opacidade atinja 0 antes da imagem mudar
}

mudarFoto2(0);




let fotoAtualEcommerce = 0;
const imagemEcommerce = document.getElementById('imagem-ecommerce-principal');
function mudarFoto3(delta) {
    fotoAtualEcommerce += delta;

    if (fotoAtualEcommerce < 0) {
        fotoAtualEcommerce = fotosEcommerce.length - 1;
    } else if (fotoAtualEcommerce >= fotosEcommerce.length) {
        fotoAtualEcommerce = 0;
    }

    // Define a opacidade para 0 antes de mudar a imagem
    imagemEcommerce.style.opacity = 0;

    // Muda a imagem após um breve momento
    setTimeout(() => {
        imagemEcommerce.src = fotosEcommerce[fotoAtualEcommerce];
        // Define a opacidade de volta para 1 após a imagem ser carregada
        imagemEcommerce.style.opacity = 1;
    }, 50); // Tempo breve o suficiente para que a opacidade atinja 0 antes da imagem mudar
}

mudarFoto3(0);



let fotoAtualOutros = 0;
const imagemOutros = document.getElementById('imagem-outros-principal');
function mudarFoto4(delta) {
    fotoAtualOutros += delta;

    if (fotoAtualOutros < 0) {
        fotoAtualOutros = fotosOutros.length - 1;
    } else if (fotoAtualOutros >= fotosOutros.length) {
        fotoAtualOutros = 0;
    }

    // Define a opacidade para 0 antes de mudar a imagem
    imagemOutros.style.opacity = 0;

    // Muda a imagem após um breve momento
    setTimeout(() => {
        imagemOutros.src = fotosOutros[fotoAtualOutros];
        // Define a opacidade de volta para 1 após a imagem ser carregada
        imagemOutros.style.opacity = 1;
    }, 50); // Tempo breve o suficiente para que a opacidade atinja 0 antes da imagem mudar
}

mudarFoto4(0);