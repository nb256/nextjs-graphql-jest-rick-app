import client from "../apollo-client";
import { gql } from "@apollo/client";

const getCharacterDetails = async ({ id }: { id: string }) => {
    try {
        const { data } = await client.query({
            query: gql`
            query GetCharacterDetails ($ids: [ID!]!){
                charactersByIds(ids: $ids) {
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
            
        `,
            variables: { ids: [id] }
        });
        return data

    } catch (error) {
        console.log(error)
    }
}
export default getCharacterDetails