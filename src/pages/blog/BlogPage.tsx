import React, { useEffect, useState } from "react";
import { marked } from 'marked';
import { sanitize } from 'dompurify';
import './blog.sass';
import { Link, useParams } from "react-router-dom";


interface Author {
    name: string;
    pictureUrl: string;
    blurb: string;
}
interface Article {
    identifier: string;
    title: string;
    tags: Array<string>;
    previewHTML?: string;
    coverImage?: string;
    writtenOn: Date;
    author: Author;
    blogHTML?: string;
}

const readBlogFile = async (fileName: string) => {
    return fetch(`/blogs/${fileName}.md`)
        .then(async (response) => {
            if (!response.ok)
                throw new Error(`Error loading ${fileName}`);
            const t = await response.text();
            return t;
        })
}

const tiarnach: Author = { name: "Tiarnach Ó Riada", pictureUrl: "/img/tiarnach.jpg", blurb: "Tiarnach is the CTO of eofis. He loves telling stories, fixing problems and finding cats in trees." };

export const BlogPage = () => {
    const [articles, setArticles] = useState<Array<Article>>([
        {
            identifier: 'How-a-personalized-learning-journey-helps-retain-employees', title: 'How a personalized learning journey helps retain employees',
            tags: ["personalisation", "retention"], writtenOn: new Date('2023-02-02T10:00Z'),
            author: tiarnach
        },
        // {
        //     identifier: 'eofis-today-and-tomorrow', title: 'Eofis - today and tomorrow',
        //     tags: ["Founder's journal"], writtenOn: new Date('2022-09-25T00:00Z')
        // },
        // {
        //     identifier: 'sample', title: 'Sample blog', tags: ['Sample', 'Journey'],
        //     writtenOn: new Date('2022-09-08T15:30Z')
        // },
    ]);
    const { id } = useParams<{ id?: string }>();
    const [article, setArticle] = useState<Article>();

    useEffect(() => {
        const _article = articles.filter((a) => a.identifier === id).at(0);
        if (_article !== undefined) {
            readBlogFile(_article.identifier).then((text) => setArticle({
                ..._article,
                blogHTML: sanitize(marked.parse(text))
            }))
        }
    }, [id]);

    return <div className="blog-container">
        {
            id && article && article.blogHTML ?
                <div>
                    <p><Link to="/blog">Back to all posts</Link></p>
                    <h2></h2>
                    <article dangerouslySetInnerHTML={{ __html: article.blogHTML }} />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="author-container">
                        <img src={article.author.pictureUrl} alt={`Picture of the author, ${article.author.name}`} />
                        <div>
                            <b>{article.author.name}</b>
                            <div>{article.author.blurb}</div>
                        </div>
                    </div>
                    <p><Link to="/blog">Back to all posts</Link></p>

                </div>
                :
                <>
                    <div>
                        <h2>All blogs</h2>
                        <ul>
                            {articles.map((bp) => <li key={bp.identifier}>{bp.writtenOn.toLocaleDateString()}<Link to={`/blog/${bp.identifier}`}> {bp.title}</Link></li>)}
                        </ul>
                    </div>
                </>
        }
    </div>
}