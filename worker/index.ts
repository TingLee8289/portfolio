interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/joke') {
      if (request.method !== 'GET') {
        return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'GET' } });
      }
      try {
        const row = await env.DB
          .prepare('SELECT id, text_zh, text_en FROM jokes ORDER BY RANDOM() LIMIT 1')
          .first();
        return Response.json(row ?? null, { headers: { 'Cache-Control': 'no-store' } });
      } catch {
        return Response.json({ error: 'Failed to load joke' }, { status: 500 });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
