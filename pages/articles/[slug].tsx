import React from 'react';
import { GetStaticPaths, GetStaticProps, GetServerSideProps, InferGetServerSidePropsType  } from 'next';
import { fetchArticle } from '../../queries/Articles/fetchArticles';
import Layout from '../../components/layout/layout';

const Article = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { article } = data;
    return (
        <div className='text-white'>
            <Layout>
              <h1 className='text-xl m-4 text-left font-bold'>{article.title}</h1>
              <h3 className='m-4'>By <a href=''>{article.publishedBy.name}</a></h3>
              <img src={article.coverImage.url} />
              <div className='m-4'>Photo by {article.publishedBy.name}</div>
              <div className='m-4'>{article.content.text}</div>
            </Layout>
        </div>
    )   
}

export default Article;


export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await fetchArticle('playboy');
    console.log(data);
    return {
      props: {
        data
      },
    }
  }
