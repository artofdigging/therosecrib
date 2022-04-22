import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

const Category = () => {
    return (
        <div>
           Category
        </div>
    )   
}

export default Category;

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {}
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking",
    };
}

