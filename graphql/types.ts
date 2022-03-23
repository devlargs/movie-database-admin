export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddUserInput = {
  age: Scalars['Int'];
  /** First Name */
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type CreateDirectorInput = {
  firstName: Scalars['String'];
  imageUrl: Scalars['String'];
  lastName: Scalars['String'];
};

export type CreateGenreInput = {
  color: Scalars['String'];
  name: Scalars['String'];
};

export type CreateMovieInput = {
  directors: Array<Scalars['String']>;
  genres: Array<Scalars['String']>;
  imageUrl: Scalars['String'];
  title: Scalars['String'];
};

export type Director = {
  __typename?: 'Director';
  _id: Scalars['String'];
  firstName: Scalars['String'];
  imageUrl: Scalars['String'];
  lastName: Scalars['String'];
};

export type Genre = {
  __typename?: 'Genre';
  _id: Scalars['String'];
  color: Scalars['String'];
  name: Scalars['String'];
};

export type ListDirectorInput = {
  _id?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type ListGenreInput = {
  _id?: InputMaybe<Scalars['String']>;
  color: Scalars['String'];
  name: Scalars['String'];
};

export type ListMovieInput = {
  _id?: InputMaybe<Scalars['String']>;
  directors: Array<Scalars['String']>;
  genres: Array<Scalars['String']>;
  imageUrl: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type Movie = {
  __typename?: 'Movie';
  _id: Scalars['String'];
  directors: Array<Director>;
  genres: Array<Genre>;
  imageUrl: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser: Array<User>;
  createDirector: Director;
  createGenre: Genre;
  createMovie: Movie;
};

export type MutationAddUserArgs = {
  input: AddUserInput;
};

export type MutationCreateDirectorArgs = {
  input: CreateDirectorInput;
};

export type MutationCreateGenreArgs = {
  input: CreateGenreInput;
};

export type MutationCreateMovieArgs = {
  input: CreateMovieInput;
};

export type Query = {
  __typename?: 'Query';
  director: Director;
  directors: Array<Director>;
  genre: Genre;
  genres: Array<Genre>;
  movie: Movie;
  movies: Array<Movie>;
  users: Array<User>;
};

export type QueryDirectorArgs = {
  _id: Scalars['String'];
};

export type QueryDirectorsArgs = {
  filters?: InputMaybe<ListDirectorInput>;
};

export type QueryGenreArgs = {
  _id: Scalars['String'];
};

export type QueryGenresArgs = {
  filters?: InputMaybe<ListGenreInput>;
};

export type QueryMovieArgs = {
  _id: Scalars['String'];
};

export type QueryMoviesArgs = {
  filters?: InputMaybe<ListMovieInput>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  age: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};
