import { FilterModel } from './filter.model';
import { SortModel } from './sort.model';
import { PaginationModel } from './pagination.model';

export class DeviceRequest {
  constructor(
    public filters: FilterModel[],
    public sort: SortModel[],
    public pagination: PaginationModel,
    public languageCode: string
  ) {}
}
