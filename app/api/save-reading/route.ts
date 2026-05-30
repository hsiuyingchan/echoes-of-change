import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { question, hexagram, transformation, microPractice } = data;

    if (!question || !hexagram) {
      return NextResponse.json({ error: 'Missing question or hexagram' }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    let entry = `---
date: ${timestamp}
question: "${question.replace(/"/g, '\\"')}"
hexagram_number: ${hexagram.number}
hexagram_name: "${hexagram.name}"
meaning: "${hexagram.meaning.replace(/"/g, '\\"')}"
---

# Echo's Reading: ${hexagram.name}

**Question:** ${question}

**The Meaning:** ${hexagram.meaning}

**The Judgment:** ${hexagram.judgment}

**The Image:** ${hexagram.image}

`;

    if (transformation) {
      entry += `## The Transformation\n\n${transformation}\n\n`;
    }

    if (microPractice) {
      entry += `## Echo's Micro-Practice for You\n\n_${microPractice}_\n\n`;
    }

    entry += `---\n\n`;

    const filePath = path.join(process.cwd(), 'iching-readings.md');
    
    // Append to file
    await fs.appendFile(filePath, entry, 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to save reading:', error);
    return NextResponse.json({ error: 'Failed to save reading' }, { status: 500 });
  }
}
