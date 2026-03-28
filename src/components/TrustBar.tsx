type TrustBarProps = {
  data?: string[]
}

export default function TrustBar({ data = [] }: TrustBarProps) {
  if (data.length === 0) return null

  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto grid w-full max-w-5xl gap-3 px-6 py-6 text-center md:grid-cols-3">
        {data.map((item) => (
          <p
            key={item}
            className="font-medium text-foreground"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}