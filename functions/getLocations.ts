import client from "../apollo-client";
import { gql } from "@apollo/client";

const getLocations = async ({ page, filter }: { page: number, filter?: { type?: string, dimension?: string } }) => {
  try {
    const { data } = await client.query({
      query: gql`
            query GetLocations($page: Int, $filter: FilterLocation) {
                locations (page: $page, filter: $filter) {
                  info {
                    count
                    pages
                  }
                  results {
                    id
                    name
                    type
                    dimension
                  }
                }
              }
        `,
      variables: { page, filter }
    });
    return data

  } catch (error) {
    console.log(JSON.stringify(error))
  }
}
export default getLocations