export async function POST(req) {
    try {
        const { image } = await req.json();

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'google/gemini-2.5-flash',
                max_tokens: 500,
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: "text",
                                text: `
Analyze the UI screenshot.

Return ONLY valid JSON.

Use EXACTLY this schema:

{
  "sections": ["", "", ""],
  "hierarchy": "",
  "designStyle": {
    "title": "",
    "characteristics": ["", "", ""]
  }
}

Rules:
- sections must be an array of section names only
- maximum 8 sections
- hierarchy maximum 15 lines
- characteristics maximum 6 items
- do not include nested objects
- do not include element analysis
- do not include labels, metrics, values, or descriptions
- do not use markdown
- return parseable JSON only

keep the heirarchy section strictly like this(in this format) not exactly same in string:
App
├── Header
│   ├── User Profile/Project Selector
│   └── Global Nav Bar
├── Sidebar
│   ├── Search Input
│   └── Main Navigation
└── Main Content Area
    ├── Projects Grid
    ├── Usage Section
    └── Alerts Section
          `,
                            },
                            {
                                type: "image_url",
                                image_url: {
                                    url: image,
                                },
                            },
                        ],
                    },
                ],
            }),
        });

        const data = await response.json();
        

        return Response.json({
            success: true,
            message:data.choices?.[0]?.message?.content,
        });
    } catch (error) {
        return Response.json(
            {
                success: false,
                error: error.message,
            },
            { status: 500 }
        );
    }
}