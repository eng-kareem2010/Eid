
document.getElementById('generateBtn').addEventListener('click', function() {
    const nameInput = document.getElementById('userName').value.trim();
    const finalName = nameInput !== "" ? nameInput : "يا غالي";
    
    document.getElementById('displayName').innerText = `يا ${finalName}`;
    

    document.getElementById('welcome-step').classList.add('hidden');
    document.getElementById('congrats-step').classList.remove('hidden');
    
    document.getElementById('action-buttons').classList.remove('hidden');
    
    launchConfetti();
});


document.getElementById('downloadBtn').addEventListener('click', function() {
    const card = document.getElementById('capture-card');
    
    
    html2canvas(card, {
        useCORS: true,       
        scale: 2,           
        backgroundColor: "#ffffff" 
    }).then(canvas => {
        
        const image = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        
        link.download = `تهنئة_عيد_الأضحى_من_كريم.png`;
        link.href = image;
        link.click(); 
    });
});


document.getElementById('backBtn').addEventListener('click', function() {
    document.getElementById('userName').value = "";
    document.getElementById('congrats-step').classList.add('hidden');
    document.getElementById('action-buttons').classList.add('hidden');
    document.getElementById('welcome-step').classList.remove('hidden');
});


function launchConfetti() {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) { requestAnimationFrame(frame); }
    }());
}