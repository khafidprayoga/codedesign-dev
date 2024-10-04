export interface SessionData {
    id: number
    name: string
    email: string
    groups: any[]
    idp: Idp
    geo: Geo
    user_uuid: string
    account_id: string
    iat: number
    ip: string
    auth_status: string
    common_name: string
    service_token_id: string
    service_token_status: boolean
    is_warp: boolean
    is_gateway: boolean
    version: number
}

export interface Idp {
    id: string
    type: string
}

export interface Geo {
    country: string
}

