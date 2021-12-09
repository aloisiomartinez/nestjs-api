export class Address {
  constructor(
    public zipCode: string,
    public street: string,
    public number: string,
    public complement: string,
    public neighborhood: string,
    public city: boolean,
    public state: boolean,
    public country: boolean,
  ) {}
}
