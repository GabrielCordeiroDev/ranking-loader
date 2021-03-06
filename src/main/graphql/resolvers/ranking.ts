/* eslint-disable @typescript-eslint/no-explicit-any */
import { adaptResolver } from '@main/adapters'
import { makeLoadLastRankingController } from '@main/factories'

export default {
  Query: {
    async lastRanking(): Promise<any> {
      return adaptResolver(makeLoadLastRankingController())
    }
  }
}
