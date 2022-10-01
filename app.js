class fetch {
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
