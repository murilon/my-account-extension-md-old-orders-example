/* eslint-disable @typescript-eslint/naming-convention */
import { masterdataSearch } from '../utils/masterdataSearch'

const CLIENT_ENTITY = 'OO'
const FIELDS = 'oldOrderId,oldOrderCart,oldOrderDate'
const PAGE = 1
const PAGE_SIZE = 10

interface emailInput {
  emailSession: string
}

interface ClusterItem {
  oldOrderId: string
  oldOrderCart: string
  oldOrderDate: string
}

interface Cluster {
  cluster: ClusterItem[]
}

export async function getCluster(
  _: unknown,
  { emailSession }: emailInput,
  { clients: { masterdata } }: Context
): Promise<Cluster | null> {
  if (!emailSession) {
    return null
  }

  const response = (await masterdataSearch(
    masterdata,
    PAGE,
    PAGE_SIZE,
    emailSession,
    CLIENT_ENTITY,
    FIELDS
  )) as ClusterItem[]

  const cluster: Cluster = {
    cluster: response,
  }

  console.log(cluster)

  return cluster
}
