// /pages/api/folders/list.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function handler(req: { method: string; query: { userId: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; end: { (): any; new(): any; }; json: { (arg0: { error?: string; folders?: any[]; }): void; new(): any; }; }; }) {
  if (req.method !== 'GET') return res.status(405).end();

  const { userId } = req.query;

  const { data, error } = await supabase
    .from('folders')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ folders: data });
}
