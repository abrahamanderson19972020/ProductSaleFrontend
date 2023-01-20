import { Category } from './category.model';
import { ResponseModel } from './response.model';
export interface CategoryResponseModel extends ResponseModel {
  data: Category[];
}
