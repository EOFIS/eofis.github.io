import React, { useEffect, useState } from "react";
import { marked } from 'marked';
import { sanitize } from 'dompurify';
import './blog.sass';
import { Link, useParams } from "react-router-dom";

interface BlogPreview {
    identifier: string;
    title: string;
    tags: Array<string>;
    previewHTML?: string;
    coverImage?: string;
    writtenOn: Date;
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

export const BlogPage = () => {
    const [blogPreviews, setBlogPreviews] = useState<Array<BlogPreview>>([
        {
            identifier: 'eofis-today-and-tomorrow', title: 'Eofis - today and tomorrow',
            tags: ["Founder's journal"], writtenOn: new Date('2022-09-25T00:00.000Z')
        },
        // {
        //     identifier: 'sample', title: 'Sample blog', tags: ['Sample', 'Journey'],
        //     writtenOn: new Date('2022-09-08T15:30.000Z')
        // },
    ]);
    const { id } = useParams<{ id?: string }>();
    const [blogHTML, setBlogHTML] = useState<string>();

    useEffect(() => {
        if (id)
            readBlogFile(id).then((text) => setBlogHTML(sanitize(marked.parse(text))))
    }, [id]);

    const previewLengthCharacters = 800;

    useEffect(() => {
        reloadBlogs();
    }, []);

    const reloadBlogs = () => {
        const bp = [...blogPreviews];
        bp.forEach((ibp) => {
            readBlogFile(ibp.identifier)
            .then((text) => ibp.previewHTML = sanitize(marked.parse(text.slice(0, previewLengthCharacters))))
            .then(() => setBlogPreviews([...bp.filter((fbp) => fbp.identifier !== ibp.identifier), ibp]));
        });
    }
    return <div className="blog-container">
        {
            id && blogHTML ?
                <div dangerouslySetInnerHTML={{ __html: blogHTML }} />
                :
                <>
                    {
                        blogPreviews.every((bp) => bp.previewHTML !== undefined) && blogPreviews?.map((bp, bpi) => <div key={bpi} title={bp.title} className="blog-preview">
                            <div dangerouslySetInnerHTML={{ __html: bp.previewHTML!! }} className="content" />
                            <Link to={`/blog/${bp.identifier}`}>Read more</Link>
                        </div>)
                    }
                    {/* <button onClick={reloadBlogs}>Reload Blogs</button> */}
                </>
        }
    </div>
}