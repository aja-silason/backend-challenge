import { SpaceEntity } from "../space/space";

export abstract class SpaceRepository {
    abstract create(payload: SpaceEntity):Promise<void>
}