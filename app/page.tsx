import Link from 'next/link';
import Image from 'next/image'

export default async function Home() {
    const wordpressUrl = process.env.WORDPRESS_URL;
    const response = await fetch(`${wordpressUrl}/wp-json/wp/v2/pages/16?_embed`);
    // Assuming your home page has ID 2, adjust if needed
    const page: any = await response.json();

    return (
        <main className="w-full max-w-4xl m-auto">
            <HomePage
                key={page.slug}
                title={page.title.rendered}
                content={page.content.rendered}
                imageUrl={page._embedded ? page._embedded['wp:featuredmedia'] ? page._embedded['wp:featuredmedia'][0].source_url : '' : ''}
                slug={page.slug}
            />
        </main>
    )
}

const HomePage = ({ title, content, imageUrl, slug }: {
    title: string;
    content: string;
    imageUrl: string;
    slug: string;
}) => {

    const wordpressUrl = process.env.WORDPRESS_URL;

    return (
        <div className='m-4'>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
                {imageUrl && (
                    <Image src={wordpressUrl + imageUrl} width={400} height={400} alt={title} className="w-full h-40 object-cover" />
                )}
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <div dangerouslySetInnerHTML={{
                        __html:
                            content
                    }} />
                </div>
            </div>
        </div>
    );
};
