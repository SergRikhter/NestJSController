import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  PostMethodWithoutData(): string {
    return 'Hello World!';
  }

  GetMethodWithParams(name : string): string | undefined {
    
    return (name!==undefined ? `${"Hello, "}` + name : undefined);
  }

  PostMethodWithData(name:string): string | undefined
  {
    return (name!==undefined ? `${"Hello, "}` + name : undefined);
  }
}
