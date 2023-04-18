import { gql, useMutation, useQuery } from '@apollo/client';

const queryproducts = gql`
query MyQuery {
    Products {
        id
        product_Description
        product_Freshness
        product_Image
        product_Name
        product_Price
        products_Category
    }
}
`
const show3Items = gql`
query MyQuery {
    Products(limit: 4) {
        id
        product_Description
        product_Freshness
        product_Image
        product_Name
        product_Price
        products_Category
    }
}
`

const MutationAdd = gql`
mutation MyMutation($object: Products_insert_input!) {
    insert_Products_one(object: $object) {
        id
        product_Description
        product_Freshness
        product_Image
        product_Name
        product_Price
        products_Category
    }
}
`

const MutationUpdate = gql`
mutation MyMutation($id: uuid!, $object: Products_set_input!) {
    update_Products_by_pk(pk_columns: {id: $id}, _set: $object) {
        id
    }
}`

const MutationDelete = gql`
mutation MyMutation($id: uuid!) {
    delete_Products_by_pk(id: $id){
        id
    }
}
`
const queryComment = gql`
query MyQuery {
    Comment {
        comment
        id
        name
        product_id
    }
}
`
const MutationAddComments = gql`
mutation MyMutation($object: Comment_insert_input!) {
    insert_Comment_one(object: $object) {
        id
        product_id
        comment
        name
    }
}
`

export default function StoreManagement (){
    const {data, loading, error} = useQuery(queryproducts)
    const [addProducts, {Loading: LoadingAdd}] = useMutation(MutationAdd, {refetchQueries : [queryproducts]})
    const [updateProducts, {Loading: LoadingUpdate}] = useMutation(MutationUpdate, {refetchQueries : [queryproducts]})
    const [deleteProducts, {Loading: LoadingDelete}] = useMutation(MutationDelete, {refetchQueries : [queryproducts]})

    return {data,addProducts,updateProducts,deleteProducts};
}
export function LandingPageStoreManagement (){
    const {data,loading3,error} = useQuery(show3Items);
    return {data};
}

export function getComment(){
    const {data,loading3,error} = useQuery(queryComment);
    const [addComment, {Loading: LoadingAdd}] = useMutation(MutationAddComments, {refetchQueries : [queryComment]})
    return {data,addComment};
}
