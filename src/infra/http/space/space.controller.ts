import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateSpaceDTO } from "src/domain/space/model/dto/create-space.DTO";
import { UpdateSpaceDTO } from "src/domain/space/model/dto/update-space.DTO";
import { Space } from "src/domain/space/space/space.entidady";
import { SpaceService } from "./space.service";

@Controller('space')
@ApiTags('Space')
export class SpaceController {
  constructor(private readonly spaceService: SpaceService) {}

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  async create(@Body() body: CreateSpaceDTO){
    const space = Space?.create(body);
    await this.spaceService.create(space);
  }


  @Get()
     async find(){
      //return await this.appService.find();
  }

  @Get(':id')
  @ApiParam({name: 'id', type: 'number'})
    async findOne(@Param() id: number){
    
        /*
        return await this.appService.findOneByOrFail(id);
    
        */
    }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({name: 'id', type: 'number'})
      async delete(@Param() id: number){
        //await this.appService.delete(id);
  }

  @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiParam({name: 'id', type: 'number'})
    async update(@Param() id: number, @Body() body: UpdateSpaceDTO){  
            //await this.appService.update(id, body);
  }
  
}
