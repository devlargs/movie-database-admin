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

export type Actor = {
  __typename?: 'Actor';
  _id: Scalars['String'];
  firstName: Scalars['String'];
  imageHashUrl?: Maybe<Scalars['String']>;
  imageUrl: Scalars['String'];
  lastName: Scalars['String'];
};

export type CreateActorInput = {
  firstName: Scalars['String'];
  imageUrl: Scalars['String'];
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
  actors: Array<Scalars['String']>;
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
  /** Gago */
  name: Scalars['String'];
};

export type ListActorInput = {
  _id?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  imageHashUrl?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
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
  actors: Scalars['String'];
  directors: Array<Scalars['String']>;
  genres: Array<Scalars['String']>;
  imageHashUrl?: InputMaybe<Scalars['String']>;
  imageUrl: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type Movie = {
  __typename?: 'Movie';
  _id: Scalars['String'];
  actors: Array<Actor>;
  directors: Array<Director>;
  genres: Array<Genre>;
  imageHashUrl?: Maybe<Scalars['String']>;
  imageUrl: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createActor: Actor;
  createDirector: Director;
  createGenre: Genre;
  createMovie: Movie;
  deleteGenre: Scalars['Boolean'];
  updateActor: Actor;
  updateDirector: Director;
  updateGenre: Genre;
  updateMovie: Movie;
};

export type MutationCreateActorArgs = {
  input: CreateActorInput;
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

export type MutationDeleteGenreArgs = {
  id: Scalars['String'];
};

export type MutationUpdateActorArgs = {
  _id: Scalars['String'];
  input: UpdateActorInput;
};

export type MutationUpdateDirectorArgs = {
  _id: Scalars['String'];
  input: UpdateDirectorInput;
};

export type MutationUpdateGenreArgs = {
  id: Scalars['String'];
  input: UpdateGenreInput;
};

export type MutationUpdateMovieArgs = {
  _id: Scalars['String'];
  input: UpdateMovieInput;
};

export type Query = {
  __typename?: 'Query';
  actor: Actor;
  actors: Array<Actor>;
  director: Director;
  directors: Array<Director>;
  genre: Genre;
  genres: Array<Genre>;
  movie: Movie;
  movies: Array<Movie>;
};

export type QueryActorArgs = {
  _id: Scalars['String'];
};

export type QueryActorsArgs = {
  filters?: InputMaybe<ListActorInput>;
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

export type UpdateActorInput = {
  firstName?: InputMaybe<Scalars['String']>;
  imageHashUrl?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type UpdateDirectorInput = {
  firstName?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type UpdateGenreInput = {
  color?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateMovieInput = {
  _id?: InputMaybe<Scalars['String']>;
  actors?: InputMaybe<Array<Scalars['String']>>;
  directors?: InputMaybe<Array<Scalars['String']>>;
  genres?: InputMaybe<Array<Scalars['String']>>;
  imageHashUrl?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};
