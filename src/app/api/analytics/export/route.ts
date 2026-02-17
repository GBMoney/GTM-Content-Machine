export async function GET() {
  const csv = "post_id,impressions,engagement_rate\n1,1234,5.4\n";
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=analytics.csv"
    }
  });
}
