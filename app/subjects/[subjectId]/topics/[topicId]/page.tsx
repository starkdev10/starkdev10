export default function TopicDetailPage({ params }: { params: { topicId: string } }) {
  return <main className="panel p-4">Topic detail: {params.topicId}</main>;
}
