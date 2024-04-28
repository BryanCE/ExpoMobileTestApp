import { Account, Client } from "react-native-appwrite";
export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.shootingutah.firstapp",
  projectId: "662da0570014711b4828",
  databaseId: "662da2ef0032e01f0481",
  userCollectionId: "662da323002fadf8b99f",
  filesCollectionId: "662da35c002de3b27f2a",
  storageId: "662da52200069d091642",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);

export const createUser = () => {
  // Register User
  account
    .create(ID.unique(), "testexample@gmail.com", "testexample", "Dale Edman")
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
};
