//fetch the API
class Fetch {
  async getCurrent(input) {
    const myKey = "a37f6c68ddfa364db8e95a77e1533dda";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
    );
    const data = await response.json();

    console.log(data);
    return data;
  }
}

class UI {
  constructor() {
    this.uiContainer = document.querySelector("#content");
    this.city;
    this.defaultCity = "Berlin";
  }

  populateUI(data) {
    this.uiContainer.innerHTML = `
        <div class="card mx-auto mt-5 border-warning" style="width: 18rem;">
        <div class="card-body justify-content-center">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">   Current temperature of ${data.main.temp}
            </h6>
            <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6> 
            <h6 class="card-subtitle mb-2 text-muted">Humidity: ${data.main.humidity}%. </h6>
            <h6 class="card-subtitle mb-2 text-muted">   Pressure: ${data.main.pressure}
            </h6>
            <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}
            </p>
            
        </div>
    </div>
    
        
        `;
  }
  clearUI() {
    uiContainer.innerHTML = "";
  }
}
const ft = new Fetch();
const ui = new UI();

const input = document.querySelector(".searchCity");
const button = document.querySelector(".submit");

button.addEventListener("click", () => {
    
  const inputValue = input.value;

  ft.getCurrent(inputValue).then((data) => {
    ui.populateUI(data);
  });
});

input.addEventListener("keypress" , (event) =>{
    if(event.key === "Enter"){
        event.preventDefault()
        button.click();
    }
})