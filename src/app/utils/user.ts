export class User {
  constructor(
    public name: string,
    public avatar_url: string,
    public location: string,
    public bio: string,
    public followers: number,
    public following: number,
    public blog: string
  ) {}
}
