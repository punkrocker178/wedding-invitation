import { Button } from '@base-ui/react/button'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-white text-neutral-900">
      <h1 className="text-3xl font-medium tracking-tight">Wedding invitation</h1>
      <Button
        type="button"
        className="rounded-full bg-neutral-900 px-5 py-2 text-sm text-white hover:bg-neutral-700"
        onClick={() => setCount((value) => value + 1)}
      >
        Count is {count}
      </Button>
    </main>
  )
}

export default App
