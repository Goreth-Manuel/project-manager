export const registerUser = async (name: string, email: string, password: string) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  
    return response.json();
  };
  
  export const loginUser = async (email: string, password: string) => {
  
    const predefinedEmail = "admin@gmail.com";
    const predefinedPassword = "123456";
  
    if (email === predefinedEmail && password === predefinedPassword) {
      const mockResponse = {
        token: "mockToken123456", 
        user: {
          name: "Admin",
          email: predefinedEmail,
        },
      };
  
      return Promise.resolve(mockResponse);
    } else {

      return Promise.reject(new Error("Credenciais inválidas"));
    }
  };
  
  