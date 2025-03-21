import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CreateVehicleDTO } from "src/domain/vehicle/model/dto/create-vehicle.DTO";
import { VehicleEntity } from "src/domain/vehicle/vehicle/vehicle";
import { VehicleService } from "./vehicle.service";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { UpdateVehicleDTO } from "src/domain/vehicle/model/dto/update-vehicle.DTO copy";

@Controller('vehicle')
@ApiTags('Vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateVehicleDTO){
    const vehicle = VehicleEntity?.create(body);
    await this.vehicleService. create(vehicle);
  }

  @Get()
  @HttpCode(201)
    async find(){
      return await this.vehicleService.findAll();
  }

  @Get(':id')
  @ApiParam({name: 'id', type: 'number'})
    async findOne(@Param('id') id: number){
      return await this.vehicleService.finOne(+id);    
  }

  /*@Delete(':id')
  @ApiParam({name: 'id', type: 'number'})
  async delete(@Param('id') id: number){

      await this.vehicleService.create(id);
  }*/

  
  @Put(':id')
  @ApiParam({name: 'id', type: 'number'})
  async update(@Param('id') id: number, @Body() body: UpdateVehicleDTO){  
    await this.vehicleService.update(id, body);
  }
  
}
