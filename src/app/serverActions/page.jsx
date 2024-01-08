import { sayHello } from '@/lib/actions'

const ServerActionsTest = () => {
  return (
    <form action={sayHello}>
        <button>test me</button>
    </form>
  )
}

export default ServerActionsTest