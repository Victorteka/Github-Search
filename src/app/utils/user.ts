export class User {
  constructor(
    public name: string,
    public avatar: string,
    public location: string,
    public bio: string,
    public followers: number,
    public following: number,
    public blog: string
  ) {}
}
