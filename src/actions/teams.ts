import { DispatchActionType } from "enums/DispatchActionType"
import { RequestStatus } from "enums/RequestStatus"
import { DispatchAction } from "types/DispatchAction"

export const viewTeams = (): DispatchAction => ({
  type: DispatchActionType.TEAMS_VIEW,
  useAPI: true,
  request: {
    path: "/teams",
    method: "GET"
  },
  status: RequestStatus.PENDING
})

export const joinTeamRequest = (id: string): DispatchAction => ({
  type: DispatchActionType.TEAM_JOIN,
  useAPI: true,
  request: {
    path: `/team/join/${id}`,
    method: "POST",
    body: { id }
  },
  status: RequestStatus.PENDING
})

export const getTeamInfo = (teamId: string): DispatchAction => ({
  type: DispatchActionType.TEAM_INFO,
  useAPI: true,
  request: {
    path: `/team/${teamId}`,
    method: "GET",
    body: { teamId }
  },
  status: RequestStatus.PENDING
})


  