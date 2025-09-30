// TestImports.tsx - Test each import one by one
export default function TestImports() {
  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <div className="bg-white p-8 rounded-xl max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Testing Imports...</h1>
        <p className="text-green-600 text-xl">✅ Base component loaded!</p>
        <p className="mt-4">If you see this, the component itself works.</p>
        <p className="mt-2">Now checking if payment components can import...</p>
      </div>
    </div>
  );
}
