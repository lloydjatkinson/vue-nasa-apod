import axios from 'axios';

export const fetchImage = async () => {
    return await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
};