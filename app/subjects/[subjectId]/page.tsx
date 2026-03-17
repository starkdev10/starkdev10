export default function SubjectDetailPage({ params }: { params: { subjectId: string } }) {
  return <main className="panel p-4">Subject detail: {params.subjectId}</main>;
}
