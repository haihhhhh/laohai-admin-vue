import { BasicPaginationResult } from '../model/baseModel';
import { defHttp } from '/@/utils/http/axios';

export interface ProductListItem {
  createAt: string;
  updatedAt: string;
  id: number;
  name: string;
  code: string;
  remark?: string;
}

export interface CreateProductParams {
  name: string;
  code: string;
  remark?: string;
}
export type UpdateProductParams = Partial<CreateProductParams>;

export type ProductListResult = BasicPaginationResult<ProductListItem>;

enum Api {
  Base = '/product',
}

export const getProductList = (params) =>
  defHttp.get<ProductListResult>({
    url: Api.Base,
    params,
    //paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
  });

export const getProductInfo = (id: number) => defHttp.get({ url: `${Api.Base}/${id}` });

export const createProduct = (params: CreateProductParams) =>
  defHttp.post({ url: Api.Base, params });

export const updateProduct = (id: number, params: UpdateProductParams) =>
  defHttp.put({ url: `${Api.Base}/${id}`, params });

export const deleteProduct = (id: number) => defHttp.delete({ url: `${Api.Base}/${id}` });
