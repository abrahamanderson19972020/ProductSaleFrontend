import { Product } from './product.model';
import { ResponseModel } from './response.model';

export interface ProductResponseModel extends ResponseModel {
  data: Product[];
}
