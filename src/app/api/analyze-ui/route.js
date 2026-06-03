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
You are a senior frontend engineer analyzing a UI screenshot.

Scan the UI top-to-bottom, left-to-right. Identify visually distinct regions separated by spacing, borders, or background changes.

Return ONLY a valid JSON object. No markdown. No code blocks. No explanation. No text before or after the JSON.

Schema:
{
  "sections": ["", ""],
  "hierarchy": "",
  "designStyle": {
    "title": "",
    "characteristics": ["", ""]
  }
}

Field rules:

"sections"
- List only sections clearly visible in the screenshot
- Max 8 items
- Use standard names: Navbar, Sidebar, Hero, Features, Pricing, Testimonials, CTA, Footer, Dashboard, Modal, Form, Card Grid
- If unsure about a section, omit it

"hierarchy"
- Plain string using box-drawing characters (├── └── │)
- Max 3 levels of nesting
- Max 15 lines total
- Only include components you can visually confirm
- Use PascalCase component names

"designStyle.title"
- Exactly 2-4 words
- Format: [Mood/Style] + [UI Type]
- Examples: "Minimal SaaS Dashboard", "Dark Dev Tool", "Bold E-commerce Store", "Clean Admin Panel"

"designStyle.characteristics"
- Exactly 6 items
- Each item max 4 words, noun phrase only, no verbs
- One item per category in this exact order:
  1. Color scheme (e.g. "Dark navy palette")
  2. Typography (e.g. "Sans-serif geometric font")
  3. Spacing (e.g. "Generous whitespace layout")
  4. Borders and shadows (e.g. "Subtle card shadows")
  5. Layout structure (e.g. "12-column grid system")
  6. Visual mood (e.g. "Professional and minimal")

Hierarchy format:
App
├── Navbar
│   ├── Logo
│   └── NavLinks
├── Sidebar
│   └── MenuItems
└── MainContent
    ├── SectionA
    └── SectionB
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
            message: data.choices?.[0]?.message?.content,
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