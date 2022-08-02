// import the gql tagged template function
const { gql } = require('apollo-server-express'); 
const { User, Book } = require('../models'); // why do i need this?

// create our typeDefs
const typeDefs = gql`
type Query {
    me: User 
  }


  type User {
    _id: ID
    username: String
    email: String 
    password: String
    bookCount: Int
    savedBooks: [Book]
  } 


  type Book {
      bookId: ID! 
      authors: [String] 
      description: String 
      title: String! 
      image: String
      link: String
  } 

  input BookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  } 

  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String, email: String, password: String): User
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }`;

// is book data a part of the thing?? for line 45, like whats it for??
// export the typeDefs
module.exports = typeDefs;