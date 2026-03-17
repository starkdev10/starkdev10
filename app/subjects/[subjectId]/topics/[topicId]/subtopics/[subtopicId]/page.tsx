export default function SubtopicDetailPage({ params }: { params: { subtopicId: string } }) {
  return <main className="panel p-4">Subtopic detail: {params.subtopicId}</main>;
}
