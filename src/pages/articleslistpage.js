import React from 'react'
import Articleslist from '../components/articles-list'
import articleContent from './article-content'

const Articleslistpage = () => (
	<>
		<h1> Articles </h1>
		<Articleslist articles = {articleContent} />
	</>
)

export default Articleslistpage