import { Address } from './address.model';
import { CreditCard } from './credtir-card.model';
import { Pet } from './pet.model';

export class Custumer {
  constructor(
    public name: string,
    public document: string,
    public email: string,
    public pets: Pet[],
    public billingAddress: Address,
    public shippingAddress: Address,
    public creditCard: CreditCard,
    public password: string,
    public active: boolean,
  ) {}
}
