export default function Home() {
  // Dummy podatki, kot jih vrne axe-core
  const dummyResults = {
    url: "https://example.com",
    timestamp: "2026. 02. 02",
    violations: [
      {
        id: "color-contrast",
        impact: "serious",
        description: "Elements must have sufficient color contrast",
        help: "Ensure the contrast between foreground and background colors meets WCAG standards",
        helpUrl: "https://dequeuniversity.com/rules/axe/4.8/color-contrast",
        nodes: [
          {
            html: "<button style='color:#aaa'>Click</button>",
            target: ["button"],
            failureSummary: "Element has insufficient color contrast"
          }
        ]
      },
      {
        id: "image-alt",
        impact: "critical",
        description: "Images must have alternate text",
        help: "Add meaningful alt attributes to all images",
        helpUrl: "https://dequeuniversity.com/rules/axe/4.8/image-alt",
        nodes: [
          {
            html: "<img src='logo.png'>",
            target: ["img"],
            failureSummary: "Image element missing alt attribute"
          }
        ]
      }
    ],
    passes: [
      {
        id: "label",
        description: "Form elements have labels",
        nodes: [
          { html: "<input id='email' />", target: ["#email"] }
        ]
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-start p-8 space-y-8">
      <h1 className="text-3xl font-bold">Accessibility Report</h1>
      <p className="text-gray-500">URL: {dummyResults.url}</p>
      <p className="text-gray-400 text-sm">Checked at: {dummyResults.timestamp}</p>

      {/* Violations */}
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">Violations</h2>
        {dummyResults.violations.map((v, i) => (
          <div key={i} className="border border-red-300 rounded-lg p-4 mb-4 bg-red-50">
            <h3 className="text-xl font-medium">{v.id} ({v.impact})</h3>
            <p className="mt-1">{v.description}</p>
            <p className="text-sm text-gray-600 mt-1">Help: <a href={v.helpUrl} className="text-blue-500 underline">{v.help}</a></p>
            <div className="mt-2 space-y-1">
              {v.nodes.map((n, j) => (
                <div key={j} className="bg-white border border-red-200 p-2 rounded">
                  <p className="text-sm font-mono">HTML: {n.html}</p>
                  <p className="text-sm text-red-700">Issue: {n.failureSummary}</p>
                  <p className="text-xs text-gray-500">Target: {n.target.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Passes */}
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">Passed</h2>
        {dummyResults.passes.map((p, i) => (
          <div key={i} className="border border-green-300 rounded-lg p-4 mb-2 bg-green-50">
            <h3 className="text-lg font-medium">{p.id}</h3>
            <p>{p.description}</p>
            <div className="mt-1 text-sm text-gray-600">
              {p.nodes.map((n, j) => (
                <p key={j}>Target: {n.target.join(", ")}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
