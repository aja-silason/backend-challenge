import { SpaceModel } from "../model/space.model";
import { SpaceEntity } from "../space/space";

export abstract class SpaceRepository {
    abstract create(payload: SpaceModel):Promise<void>
}