document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
  
    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
  
    const temperature = 41;
    const windSpeed = 10;
  
    const windChillElement = document.querySelector(".weather ul");
    const windChill = calculateWindChill(temperature, windSpeed);
  
    if (temperature <= 50 && windSpeed > 3) {
      windChillElement.innerHTML += `<li><strong>Wind Chill:</strong> ${windChill.toFixed(1)} °F</li>`;
    } else {
      windChillElement.innerHTML += `<li><strong>Wind Chill:</strong> N/A</li>`;
    }
  });
  
  // Calculate wind chill factor in Fahrenheit
  function calculateWindChill(temp, speed) {
    return (
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * temp * Math.pow(speed, 0.16)
    );
  }
  