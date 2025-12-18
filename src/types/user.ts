// Defining the Address interface separately for better organization
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

// Main User interface matching the API response structure
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  address: Address;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
