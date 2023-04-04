import { useRenderSession } from 'vtex.session-client'
import { searchCluster } from '../queries/searchCluster.gql'
import { useQuery } from 'react-apollo'
import { Spinner } from 'vtex.styleguide'

const OldOrders = () => {

  const { session } = useRenderSession()

  console.log(session)

  const emailSession = session?.namespaces?.profile?.email?.value

  const { loading, data, error } = useQuery(searchCluster, {
    variables: { emailSession },
  })

  const oldOrders = data?.getCluster?.cluster

  console.log(oldOrders)

  if (loading) {
    return (
      <span className="dib c-muted-1">
        <Spinner color="currentColor" size={30} />
      </span>
    )
  }

  if (error) {
    return <div> Something went wrong!</div>
  }

  if (!oldOrders) {
    return <div> Nenhum pedido antigo encontrado para este usuário! </div>
  }

  return (
    <>
      <div> Meus Pedidos Antigos </div>
      <ul>
      {oldOrders.map(item => (
        <li key={item.oldOrderId}>
          <p>ID Antigo: {item.oldOrderId}</p>
          <p>Carrinho: {item.oldOrderCart}</p>
          <p>Data: {item.oldOrderDate}</p>
        </li>
      ))}
    </ul>
    </>
  )
}

export default OldOrders
