import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { steps, responses } = data;

    if (!steps || !responses) {
      return NextResponse.json({ error: 'Missing steps or responses' }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    let entry = `---
date: ${timestamp}
type: guided_reflection
---

# Echo's Guided Reflection - ${new Date().toLocaleDateString()}

`;

    steps.forEach((step: any, index: number) => {
      entry += `## ${step.title}\n\n**Prompt:** ${step.prompt}\n\n**Response:** ${responses[index] || '_No response provided_'}\n\n---\n\n`;
    });

    const filePath = path.join(process.cwd(), 'journal-entries.md');
    
    // Append to file
    await fs.appendFile(filePath, entry, 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to save journal entry:', error);
    return NextResponse.json({ error: 'Failed to save journal entry' }, { status: 500 });
  }
}
