import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  test(): string {
    return 'Hello NestJS World';
  }
}
