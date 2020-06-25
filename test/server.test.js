import axios from 'axios'

describe('API GET Request for photos', () => {
  it('should return response 201 with 72 photos', () => {
    return axios.get('http://localhost:3002/api/photos')
      .then(response => {
        expect(response.status).toBe(201);
        expect(response.data.length).toBe(72)
      })
  });

  it ('should return response 201 with 100 reviews', () => {
    return axios.get('http://localhost:3002/api/reviews')
      .then(response => {
        console.log(response.data.length);
        expect(response.status).toBe(201);
        expect(response.data.length).toBe(100);
      })
  });
});