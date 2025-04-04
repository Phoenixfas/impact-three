export async function POST(req: Request) {
    const { eventType, budget, vibe } = await req.json();
  
    if (!eventType || !budget || !vibe) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }
  
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API key is missing" }), { status: 500 });
    }
  
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
                parts: [
                    {
                        text: `Suggest a unique event idea based on these details:\n- Event Type: ${eventType}\n- Budget: ${budget}\n- Vibe: ${vibe}\n\nMake it creative and engaging.`
                    }
                ]
            }
          ],
        }),
      });
  
      const data = await response.json();
      return new Response(JSON.stringify({ idea: data.candidates?.[0]?.content.parts?.[0]?.text || "No idea generated" }), { status: 200 });
    } catch (error) {
      console.error("Error generating idea:", error);
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
  }
  