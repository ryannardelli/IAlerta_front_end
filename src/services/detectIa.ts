const API_URL = "/api/detect-ai-text";

export async function detectAIContent(text: string) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error("Erro na API:", errData);
      throw new Error(errData.message || "Erro inesperado do backend");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error: unknown) {
    if(error instanceof Error) {
      console.error("Erro no fetch:", error.message);
      throw error;
    }
  }
}
