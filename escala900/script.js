const N8N_WEBHOOK_URL = 'https://screamingwombat-n8n.cloudfy.live/rest/webhooks/extrair-leads';

document.getElementById('extraction-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const niche = document.getElementById('niche').value;
    const city = document.getElementById('city').value;
    const limit = document.getElementById('limit').value;
    
    const btn = document.getElementById('start-btn');
    const btnText = btn.querySelector('.btn-text');
    const loader = btn.querySelector('.loader');
    const statusBadge = document.getElementById('status-badge');
    const terminal = document.getElementById('log-terminal');
    
    // UI State: Running
    btn.disabled = true;
    btnText.textContent = 'Extraindo...';
    loader.style.display = 'block';
    
    statusBadge.className = 'badge running';
    statusBadge.textContent = 'Em Progresso';
    
    terminal.innerHTML = `<div class="log-entry system">[${new Date().toLocaleTimeString()}] Iniciando Varredura Inteligente...</div>`;
    terminal.innerHTML += `<div class="log-entry info">[${new Date().toLocaleTimeString()}] Alvo: ${niche} em ${city}</div>`;
    
    try {
        terminal.innerHTML += `<div class="log-entry system">[${new Date().toLocaleTimeString()}] Essa operação pode demorar. Respeitando limites e delays antibloqueio...</div>`;
        
        // Requisição direta e assíncrona para o Webhook do n8n
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                niche,
                city,
                limit
            })
        });

        if (response.ok) {
            terminal.innerHTML += `<div class="log-entry success">[${new Date().toLocaleTimeString()}] ✔ Varredura concluída pelo n8n! Planilha alimentada!</div>`;
            terminal.scrollTop = terminal.scrollHeight;
            finishExecution(true);
        } else {
            const errorData = await response.text();
            terminal.innerHTML += `<div class="log-entry warning">[${new Date().toLocaleTimeString()}] ❌ Erro retornado pelo n8n: ${errorData || response.statusText}</div>`;
            terminal.scrollTop = terminal.scrollHeight;
            finishExecution(false);
        }
        
    } catch (error) {
        terminal.innerHTML += `<div class="log-entry warning">[${new Date().toLocaleTimeString()}] ❌ Erro de Conexão com Webhook: ${error.message}</div>`;
        terminal.scrollTop = terminal.scrollHeight;
        finishExecution(false);
    }
    
    function finishExecution(success = true) {
        btn.disabled = false;
        btnText.textContent = 'Iniciar Extração';
        loader.style.display = 'none';
        
        statusBadge.className = success ? 'badge done' : 'badge idle';
        statusBadge.textContent = success ? 'Concluído' : 'Erro';
    }
});
