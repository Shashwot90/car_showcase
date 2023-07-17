export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '43e9e371cfmshbc3fc2a1afeaf39p134a77jsna5e15b538483',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers: headers,});
    const result = await response.json();
    return result;
}