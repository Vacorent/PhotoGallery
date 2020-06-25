import axios from 'axios'

describe('API GET Request for photos', () => {
  it('should return 201 for GET request for photos', () => {
    return axios.get('http://localhost:3002/api/photos')
      .then(response => {
        expect(response.status).toBe(201);
      })
  });

  it ('should return 201 for GET requests for reviews', () => {
    return axios.get('http://localhost:3002/api/reviews')
      .then(response => {
        console.log(response);
        expect(response.status).toBe(201);
      })
  });
});