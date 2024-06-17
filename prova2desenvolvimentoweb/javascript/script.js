var header = document.getElementById('header');
var navegacaoHeader = document.getElementById('navegacao_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navegacaoHeader.style.marginLeft = '-10vw';
        navegacaoHeader.style.animationName = 'showSidebar';
    } else {
        navegacaoHeader.style.marginLeft = '-100vw';
    }
}
