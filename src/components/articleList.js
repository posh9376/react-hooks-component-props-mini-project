import Article from "./article";

function ArticleList({ posts }) {
    return (
        <main>
            {posts.map((post) => (
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                    read={post.minutes}
                />
            ))}
        </main>
    );
}

export default ArticleList