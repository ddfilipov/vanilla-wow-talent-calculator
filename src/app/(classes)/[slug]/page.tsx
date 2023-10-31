export default function ClassPage({ params }: { params: { slug: string } }) {
    return <h1>{params.slug}</h1>;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const capitalizedSlug = params.slug[0].toUpperCase() + params.slug.slice(1, params.slug.length);
    return {
        title: capitalizedSlug,
    };
}
