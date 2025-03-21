import { Injectable, NotFoundException } from "@nestjs/common";
import { SpaceRepository } from "src/domain/space/protocol/space-repository";
import { MoreThan, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { SpaceModel } from "src/domain/space/model/space.model";
import { UpdateSpaceDTO } from "src/domain/space/model/dto/update-space.DTO";
import { SpaceEntity } from "src/domain/space/space/space";


@Injectable()
export class TypeORMSpaceRepository implements SpaceRepository {

    constructor(
        @InjectRepository(SpaceModel)
        private readonly spaceRps: Repository<SpaceModel>
    ) { }


    public async create(input: SpaceEntity): Promise<void> {

        const space = this.spaceRps.create(input)
        await this.spaceRps.save(space)

    }


    public async findAll(): Promise<any[]> {

        return await this.spaceRps.find();

    }


    public async findOne(id: number): Promise<SpaceModel | null | any> {

        const space = await this.spaceRps.findOne({ where: { id: id } });

        if (!space) {
            throw new NotFoundException(`space with id ${id} not found`);
        }

        return space;

    }

    async delete(id: number): Promise<void> {
        
        await this.findOne(+id);
        await this.spaceRps.delete(+id);

    }

    async update(id: number, newSpace: UpdateSpaceDTO): Promise<void> {

        const space = await this.findOne(+id);
        space.updatedAt = new Date();
        this.spaceRps.merge(space, newSpace);
        await this.spaceRps.save(space)
        
    }

    async register_input_activity_in_slot(typeOfVehicle: string) {
        
        if(typeOfVehicle?.toLowerCase() == 'moto'){

            const slots = await this.spaceRps.findOne({where: {slot_motorcycle: MoreThan(0)}});

            if(!slots) {
                throw new NotFoundException('Whithou slots available for motorcycle');
            }

            slots.slot_motorcycle -= 1;
            await this.spaceRps.save(slots);

        } else if (typeOfVehicle?.toLowerCase() == 'carro'){

            const slots = await this.spaceRps.findOne({where: {slot_car: MoreThan(0)}});
            if(!slots){
                throw new NotFoundException('Whithou slots available for cars');
            }

            slots.slot_car -= 1;
            await this.spaceRps.save(slots);

        }

    }


    async register_output_activity_in_slot(typeOfVehicle: string, parkId: number){

        const space = await this.spaceRps.findOne({where: {id: parkId}});

        if(!space) {
            throw new NotFoundException("Space not found");
        }

        if(typeOfVehicle?.toLowerCase() == "moto"){
            if(space.slot_motorcycle < space.qtd_motorcycle_slot){
                space.slot_motorcycle += 1;
                return await this.spaceRps.save(space);
            }
            return;
        } else if (typeOfVehicle?.toLowerCase() == "carro"){
            if(space.slot_car < space.qtd_car_slot){
                space.slot_car += 1;
                return await this.spaceRps.save(space);
            }
        }


    }



}