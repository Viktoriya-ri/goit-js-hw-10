const url = 'https://api.thecatapi.com/v1';
const api_key = "live_D1FTqoGN2nSqBIVXiHSxl5E7qu3FVhRoYVB7ooJ3fW4AVh6eK6sp9nssZ6wQO0b3";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
};