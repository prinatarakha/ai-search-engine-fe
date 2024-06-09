export async function POST(
  req: Request,
) {
  if (req.method === 'POST') { // proxy request
    const body = await req.json();
    const resServer = await fetch(`http://103.49.239.152:8000/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Y3Q1d0lsMkpPZTh0S3Z6WVJ3UmpqNGMxNTRTck9oZHR6SDM1T1V1OWg4T3pHVTVJ',
      },
      body: JSON.stringify(body),
    });
    const data = await resServer.json();
    return Response.json(data);
  }
  return Response.json(null);
}