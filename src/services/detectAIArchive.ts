const API_URL = "/api/detect-ai-archive";

export async function detectAIArchive(file: File) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error("Erro na API de arquivo:", errData);
      throw new Error(errData.message || "Erro inesperado do backend");
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if(error instanceof Error) {
      console.error("Erro no fetch de arquivo:", error.message);
      throw error;
    }
  }
}
