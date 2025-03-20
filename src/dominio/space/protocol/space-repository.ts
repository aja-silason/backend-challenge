import {  SpaceProps } from "../space/space.entidady";

export abstract class SpaceRepository {
    abstract create(payload: SpaceProps):Promise<void>
}