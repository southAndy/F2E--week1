interface ApiResponse {
    Address:string
    Class1:string
    DescriptionDetail: string
    Phone: string
    OpenTime: string,
    Picture:ApiImage, 
    Position: ApiDataPosition, 
    Class1: string,
    ParkingPosition: object,
    SrcUpdateTime: string,
    UpdateTime: string,
    ZipCode:string
    City:string //to confirm

}

interface ActivitiesApi extends ApiResponse {
    StartTime:string
    EndTime:string
    ActivityName:string
    ActivityID:string
}

interface ScenicSpotApi extends ApiResponse {
    ScenicSpotID: string
    ScenicSpotName: string
}
interface RestaurantApi extends ApiResponse{

}


interface ApiDataPosition {
    PositionLon:number
    PositionLat:number
    GeoHash:string
}
interface ApiImage {
    PictureUrl1?:string,
    PictureDescription1?:string,
    PictureUrl2?:string,
    PictureDescription2?:string,
    PictureUrl3?:string,
    PictureDescription3?:string
}


declare module "@/service/getApi.js"{
    export function createAxios():Promise<any>
    export function getActivitiesAPI():any
    export function getScenicSpotAPI():any
    export function getRestaurantAPI():any
}


export {
    ApiResponse,
    ActivitiesApi,
    ScenicSpotApi,
    RestaurantApi
}

