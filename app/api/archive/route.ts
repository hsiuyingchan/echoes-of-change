import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const readingsPath = path.join(process.cwd(), 'iching-readings.md');
    const journalPath = path.join(process.cwd(), 'journal-entries.md');

    let readings = '';
    let journals = '';

    try {
      readings = await fs.readFile(readingsPath, 'utf-8');
    } catch (e) {
      console.log('No readings file found yet');
    }

    try {
      journals = await fs.readFile(journalPath, 'utf-8');
    } catch (e) {
      console.log('No journal file found yet');
    }

    return NextResponse.json({ readings, journals });
  } catch (error) {
    console.error('Failed to fetch archive:', error);
    return NextResponse.json({ error: 'Failed to fetch archive' }, { status: 500 });
  }
}
