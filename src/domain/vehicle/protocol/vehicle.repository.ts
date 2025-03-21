import { VehicleEntity } from "../vehicle/vehicle";

export abstract class VehicleRepository {
    abstract create(payload: VehicleEntity): Promise<void>;
    abstract findAll?(payload: VehicleEntity): Promise<void>;
    abstract findOne?(id: number): Promise<void>;
    abstract delete?(id: number): Promise<void>;
    abstract update?(id: number): Promise<void>;
}