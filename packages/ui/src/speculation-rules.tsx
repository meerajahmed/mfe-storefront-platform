export function SpeculationRules() {
  const rules = {
    prefetch: [
      {
        source: "document",
        where: {
          and: [
            { href_matches: "/*" },
            { not: { href_matches: "/api/*" } },
            { not: { href_matches: "/_next/*" } },
          ],
        },
        eagerness: "moderate",
      },
    ],
    prerender: [
      {
        source: "document",
        where: {
          and: [
            { href_matches: "/*" },
            { not: { href_matches: "/api/*" } },
            { not: { href_matches: "/_next/*" } },
          ],
        },
        eagerness: "conservative",
      },
    ],
  };
 
  return (
    <script
      type="speculationrules"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(rules) }}
    />
  );
}