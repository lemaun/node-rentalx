import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) { }
  execute(): Specification[] {
    const categories = this.specificationsRepository.list();

    return categories;
  }
}

export { ListSpecificationsUseCase }