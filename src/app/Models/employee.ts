export class Employee {
  id: string;
  name: string;
  email?: string;
  joiningDate?: Date;

  constructor(
    id?: string,
    name?: string,
    email?: string,
    joiningDate?: Date
  ) {
    this.id = id || '';
    this.name = name || '';
    this.email = email;
    this.joiningDate = joiningDate || new Date();
  }
}