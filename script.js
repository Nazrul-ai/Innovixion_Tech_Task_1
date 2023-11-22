document.addEventListener('DOMContentLoaded', function () {
    let countdownInterval;
  

    const targetDate = new Date('December 31, 2023 23:59:59').getTime();
    
  
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    stopBtn.style.backgroundColor = "red";
    
  
    startBtn.addEventListener('click', startCountdown);
    stopBtn.addEventListener('click', stopCountdown);
  
    function startCountdown() {
      countdownInterval = setInterval(updateCountdown, 1000);
    }
  
    function stopCountdown() {
      clearInterval(countdownInterval);
      document.getElementById('countdown').innerHTML = 'Countdown Stopped';
    }
  
    function updateCountdown() {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;
  
      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        document.getElementById('countdown').innerHTML =
          `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'Happy New Year!';
      }
    }
  });
  