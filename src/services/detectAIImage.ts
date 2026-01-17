const API_URL = "/api/detect-ai-image";

export async function detectAIImage(file: File) {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error("Erro na API:", errData);
      throw new Error(errData.message || "Erro inesperado do backend");
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if(error instanceof Error) {
       console.error("Erro no fetch de imagem:", error.message);
       throw error;
    }
  }
}
