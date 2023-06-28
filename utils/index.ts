const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a5398b92f7msh92fe8d07f1f9534p108575jsn6ea618034835",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "a5398b92f7msh92fe8d07f1f9534p108575jsn6ea618034835",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
}
