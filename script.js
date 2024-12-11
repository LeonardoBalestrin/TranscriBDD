const form = document.querySelector('form');

const replaceImages = () =>{
    document.body.style.background='red'
}

// Função para logar os eventos de clique
document.addEventListener('click', function(event) {
    console.log('Elemento clicado:', event.target);
});

// Função para logar as trocas de foco
document.addEventListener('focus', function(event) {
    console.log('Elemento com foco:', event.target);
}, true); // O uso de true no terceiro parâmetro ativa o capturing, para pegar os focos em todos os elementos

// Função para logar quando o foco sai de um elemento
document.addEventListener('blur', function(event) {
    console.log('Elemento perdeu foco:', event.target);
}, true);

// Função para logar teclas pressionadas
document.addEventListener('keydown', function(event) {
    console.log('Tecla pressionada:', event.key, 'no elemento:', event.target);
});

// Função para logar teclas levantadas (útil para capturar 'Enter')
document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        console.log('Enter pressionado no elemento:', event.target);
    }
});

var documentoBDD=[],cenarioTeste=[];

form.addEventListener('submit',async(event)=>{
    event.preventDefault();
    
    const [tab] = await chrome.tabs.query({active:true,currentWindow:true})

    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function:replaceImages,
    });
    
})

/*
    // Função para logar os eventos de clique
    document.addEventListener('click', function(event) {
        console.log('Elemento clicado:', event.target);
    });

    // Função para logar as trocas de foco
    document.addEventListener('focus', function(event) {
        console.log('Elemento com foco:', event.target);
    }, true); // O uso de true no terceiro parâmetro ativa o capturing, para pegar os focos em todos os elementos

    // Função para logar quando o foco sai de um elemento
    document.addEventListener('blur', function(event) {
        console.log('Elemento perdeu foco:', event.target);
    }, true);

    // Função para logar teclas pressionadas
    document.addEventListener('keydown', function(event) {
        console.log('Tecla pressionada:', event.key, 'no elemento:', event.target);
    });

    // Função para logar teclas levantadas (útil para capturar 'Enter')
    document.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            console.log('Enter pressionado no elemento:', event.target);
        }
    }); 
*/