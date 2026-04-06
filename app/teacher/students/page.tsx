export default function StudentsPage() {
  const mockStudents = [
    { id: "1", name: "Alice Smith", email: "alice@school.ac.uk", topicsStarted: 8, questionsAttempted: 45 },
    { id: "2", name: "Bob Jones", email: "bob@school.ac.uk", topicsStarted: 5, questionsAttempted: 23 },
    { id: "3", name: "Charlie Brown", email: "charlie@school.ac.uk", topicsStarted: 12, questionsAttempted: 67 },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold text-foreground">Students</h1>
      <p className="mt-1 mb-6 text-sm text-muted-foreground">
        Monitor student progress across topics and questions.
      </p>

      <div className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-alt text-left">
              <th className="px-4 py-3 font-semibold text-foreground">Name</th>
              <th className="px-4 py-3 font-semibold text-foreground">Email</th>
              <th className="px-4 py-3 font-semibold text-foreground">Topics</th>
              <th className="px-4 py-3 font-semibold text-foreground">Questions</th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map((s) => (
              <tr key={s.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                <td className="px-4 py-3 font-medium text-foreground">{s.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.email}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.topicsStarted}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.questionsAttempted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
