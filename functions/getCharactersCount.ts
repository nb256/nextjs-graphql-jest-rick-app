
import client from "../apollo-client";
import { gql } from "@apollo/client";

const getCharactersCount = async () => {
  try {
    const { data } = await client.query({
      query: gql`
            query GetCharactersCount {
                characters {
                  info {
                    count
                  }
                }
              }
        `,
    });
    return data

  } catch (error) {
    console.log(error)
  }
}
export default getCharactersCount