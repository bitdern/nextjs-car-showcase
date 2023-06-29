export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "a5398b92f7msh92fe8d07f1f9534p108575jsn6ea618034835",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
