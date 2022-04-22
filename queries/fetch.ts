import { GraphQLClient, RequestDocument, Variables } from "graphql-request";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL!);

export const fetchData = async <T>(query: RequestDocument, variables: Variables | undefined)  => {
    const data = await client.request<T>(query, variables);
    return data;
}