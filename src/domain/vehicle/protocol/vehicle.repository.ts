import { UpdateVehicleDTO } from "../model/dto/update-vehicle.DTO copy";
import { VehicleEntity } from "../vehicle/vehicle";

export abstract class VehicleRepository {
    abstract create(payload: VehicleEntity): Promise<void>;
    abstract findAll(): Promise<VehicleEntity[]>;
    abstract findOne(id: number): Promise<void>;
    abstract delete(id: number): Promise<void>;
    abstract update(id: number, newPayload: UpdateVehicleDTO): Promise<void>;
}