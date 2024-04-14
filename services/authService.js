const API_URL = 'http://localhost:3000/api/users'; // Adjust this URL according to your backend API endpoint

async function registerUser(fullName, username, password, grade) {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, username, password, grade }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    return data;
  } catch (error) {
    console.error('Error registering user:', error.message);
    throw error;
  }
}

async function loginUser(username, password) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    return data.token;
  } catch (error) {
    console.error('Error logging in:', error.message);
    throw error;
  }
}

export { registerUser, loginUser };
