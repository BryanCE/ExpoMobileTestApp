import { ID, Account, Client, Avatars, Databases } from "react-native-appwrite";
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
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, psswrd, userName) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      psswrd,
      userName
    );
    if (!newAccount) throw new Error("Failed to create user");
    const avatarUrl = avatars.getInitials(userName);
    await signIn(email, psswrd);
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountID: newAccount.$id,
        email,
        userName,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user", error);
  }
};
export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
