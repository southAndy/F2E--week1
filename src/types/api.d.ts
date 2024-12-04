interface ApiResponse {
    Address:string
    Class1:string
    ScenicSpotID: string
    ScenicSpotName: string
    DescriptionDetail: string
    Phone: string
    OpenTime: string,
    Picture: {}, 
    Position: ApiDataPosition, 
    Class1: string,
    ParkingPosition: object,
    SrcUpdateTime: string,
    UpdateTime: string,
    ZipCode:string
}

interface ApiDataPosition {
    PositionLon:number
    PositionLat:number
    GeoHash:string
}


declare module "@/service/getApi.js"{
    export function createAxios():Promise<any>
    export function getActivitiesAPI():any
    export function getScenicSpotAPI():any
    export function getRestaurantAPI():any
}


export {
    ApiResponse
}

