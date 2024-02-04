import { Controller, Get,HttpCode, Query } from '@nestjs/common';
import { AppService } from 'src/services/app.service';
@Controller('get-methods')
export class GetMethodsController {
  constructor(private readonly controllerService:AppService){}
  /***
   * GET Methods with params 
   * @returns string or undefined
   */
  @Get("/getMethod")
  @HttpCode(200)
   getMyName(@Query('username') name : string) : string | undefined {
    return this.controllerService.GetMethodWithParams(name);
  }
}
