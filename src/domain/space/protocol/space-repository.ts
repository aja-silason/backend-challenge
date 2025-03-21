import { SpaceEntity, SpaceProps } from "../space/space";

export abstract class SpaceRepository {
    abstract create(payload: SpaceEntity):Promise<void>
    abstract findAll(): Promise<SpaceEntity[]>;
    abstract findOne(id: number): Promise<SpaceEntity | null>;
    abstract delete(id: number): Promise<void>;
    abstract update(id: number, newSpace: SpaceProps): Promise<void>;
    abstract register_input_activity_in_slot?(typeOfVehicle: string)
    abstract register_output_activity_in_slot?(typeOfVehicle: string, vehicleId: number)
}