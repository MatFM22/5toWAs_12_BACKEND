export default function FormWrapper({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="p-6 border rounded-xl shadow-sm bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  )
}