import client from "../apollo-client";
import { gql } from "@apollo/client";

const getLocationDetails = async ({ id }: { id: string }) => {
  try {
    const { data } = await client.query({
      query: gql`
            query GetLocation ($ids: [ID!]!){
              locationsByIds(ids: $ids) {
                id
                name
                type
                dimension
                residents {
                  id
                  name
                  status
                  species
                  type
                  gender
                  origin {
                    id
                    name
                  }
                  image
                }
              }
            }
            
        `,
      variables: { ids: [id] }
    });
    return data

  } catch (error) {
    console.log(error)
  }
}
export default getLocationDetails