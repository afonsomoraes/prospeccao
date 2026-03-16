const N8N_WEBHOOK_URL = 'https://screamingwombat-n8n.cloudfy.live/webhook-test/extrair-leads';

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
    btnText.textContent = 'Aguarde o N8N...';
    loader.style.display = 'block';
    
    statusBadge.className = 'badge running';
    statusBadge.textContent = 'Processando';
    
    terminal.innerHTML += `<div class="log-entry system">[${new Date().toLocaleTimeString()}] Iniciando Varredura. Disparando Webhook para n8n...</div>`;
    terminal.innerHTML += `<div class="log-entry info">[${new Date().toLocaleTimeString()}] Alvo: ${niche} em ${city}</div>`;
    
    try {
        terminal.innerHTML += `<div class="log-entry system">[${new Date().toLocaleTimeString()}] O N8N está rodando os blocos. Esta operação pode demorar vários minutos devido aos delays antibloqueio...</div>`;
        terminal.scrollTop = terminal.scrollHeight;
        
        // Requisição direta e assíncrona para o Webhook do n8n de Produção
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
            terminal.innerHTML += `<div class="log-entry success">[${new Date().toLocaleTimeString()}] ✔ Varredura concluída pelo n8n! Planilha atualizada.</div>`;
            terminal.scrollTop = terminal.scrollHeight;
            finishExecution(true);
        } else {
            const errorData = await response.text();
            terminal.innerHTML += `<div class="log-entry warning">[${new Date().toLocaleTimeString()}] ❌ Erro retornado pelo n8n: ${errorData || response.statusText}</div>`;
            terminal.scrollTop = terminal.scrollHeight;
            finishExecution(false);
        }
        
    } catch (error) {
        terminal.innerHTML += `<div class="log-entry warning">[${new Date().toLocaleTimeString()}] ❌ Erro de Conexão: Possível erro de CORS ou Webhook não ativado. Ative o Workflow no n8n.</div>`;
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
