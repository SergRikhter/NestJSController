import { Controller,Post,HttpCode, Body } from '@nestjs/common';
import { AppService } from 'src/services/app.service';

@Controller('post-methods')
export class PostMethodsController {
 
    constructor(private readonly controllerService : AppService){}
    /***
   * POST methods without params
   * @returns string or undefined 
   */
  @Post("/postMethod")
  @HttpCode(200)
  showMeHello(): string | undefined {
    return this.controllerService.PostMethodWithoutData();
  }

  /***
   * Post methods with params
   * @returns string or undefined 
   */
  @Post("/postData")
  @HttpCode(200)
   showMeString(@Body("data") data : string) : string | undefined{ 
    return this.controllerService.PostMethodWithData(data);
   } 

}
