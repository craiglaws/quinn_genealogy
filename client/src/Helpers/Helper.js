class Helper {

    post(payload) {
      return fetch('http://localhost:5000/formSubmit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }
  

  }
  export default Helper;