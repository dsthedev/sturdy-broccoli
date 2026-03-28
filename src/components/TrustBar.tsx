type TrustBarProps = {
  data?: string[]
}

export default function TrustBar({ data = [] }: TrustBarProps) {
  if (data.length === 0) return null

  return (
    <section>
      <div className="mx-auto w-full max-w-4xl px-6 py-8">
        <h3 className="mb-4 text-center font-heading text-3xl font-semibold text-accent">
          Why NaturPro
        </h3>
        <ul className="mx-auto max-w-xl list-inside list-disc space-y-2 text-left text-foreground">
          {data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}