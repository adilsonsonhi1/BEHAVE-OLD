// JSON com os dados da contagem regressiva
const countdownData = {
    // "targetDate": "2024-12-31T23:59:59Z"
    "targetDate": "2024-06-30T23:59:59Z"
};

// Função para armazenar o JSON no localStorage
function storeCountdownData() {
    localStorage.setItem('countdownData', JSON.stringify(countdownData));
}

// Função para recuperar os dados da contagem regressiva do localStorage
function getCountdownData() {
    const data = localStorage.getItem('countdownData');
    return data ? JSON.parse(data) : null;
}

// Função para calcular e exibir a contagem regressiva
function startCountdown() {
    const data = getCountdownData();
    if (!data) return;

    const targetDate = new Date(data.targetDate).getTime();

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Armazena os dados do JSON no localStorage e inicia a contagem regressiva
storeCountdownData();
startCountdown();