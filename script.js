function onSubmit() { 
    const day = parseInt(document.getElementById('day').value);
        const month = parseInt(document.getElementById('month').value);
        const year = parseInt(document.getElementById('year').value);
    
        if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
          const birthDate = new Date(year, month - 1, day);
          const currentDate = new Date();
          let years = currentDate.getFullYear() - birthDate.getFullYear();
          let months = currentDate.getMonth() - birthDate.getMonth();
          let days = currentDate.getDate() - birthDate.getDate();
          
          if (days < 0) {
            months--;
            days += new Date(year, month, 0).getDate();
          }
          if (months < 0) {
            years--;
            months += 12;
          }
          
          document.getElementById('years').textContent = years;
          document.getElementById('months').textContent = months;
          document.getElementById('days').textContent = days;
        } else {
          alert('Please enter valid date values.');
        }
}
