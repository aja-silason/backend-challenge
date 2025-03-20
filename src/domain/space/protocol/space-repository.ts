import { SpaceEntity } from "../space/space";

export abstract class SpaceRepository {
    abstract create(payload: SpaceEntity):Promise<void>
    abstract findAll(): Promise<SpaceEntity[]>;
    abstract findOne(id: number): Promise<SpaceEntity>;
}