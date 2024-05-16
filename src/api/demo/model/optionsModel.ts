import { BasicPaginationResult } from '@/api/model/baseModel';

export interface DemoOptionsItem {
  name: string;
  id: string;
}

export interface selectParams {
  id: number | string;
}

/**
 * @description: Request list return value
 */
export type DemoOptionsGetResultModel = BasicPaginationResult<DemoOptionsItem>;
