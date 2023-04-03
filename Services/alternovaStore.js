const API_URL = 'https://1be9db56-c889-466d-9c12-cba178414901.mock.pstmn.io/';

export const listAll = async () => {
    try {
        const response = await fetch(`${API_URL}all-products`);
        const all = await response.json();
        return all;
      } catch {
        throw new Error('Error in fetch products');
      }
};

export const getOne = async (id) => {
    try {
      const response = await fetch(`${API_URL}detail/${id}`);
      const get = await response.json();
      return get;
    } catch (error) {
      throw new Error(error);
    }
};

export const addOne = async (newRegister) => {
    try {
        const payload = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRegister),
          };
        const response = await fetch(`${API_URL}buy`, payload);
        const add = await response.json();
        return add;
    } catch (error) {
      throw new Error(error);
    }
};