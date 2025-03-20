import { SpaceEntity } from "../space/space";

export abstract class SpaceRepository {
    abstract create(payload: SpaceEntity):Promise<void>
    abstract findAll(): Promise<SpaceEntity[]>;
    abstract findOne(id: number): Promise<SpaceEntity | null>;
    abstract update(id: number, newSpace: SpaceEntity): Promise<void>;
    abstract delete(id: number): Promise<void>;
}