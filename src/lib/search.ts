import FlexSearch from 'flexsearch';

let docsIndex: FlexSearch.Index;
let docs: any[];

export function createDocsIndex(data: any[]) {
    docsIndex = new FlexSearch.Index({ tokenize: 'forward' });

    data.forEach((doc, i) => {
        const item = `${doc.title} ${doc.content}`;
        docsIndex.add(i, item);
    });

    docs = data;
};

export function searchDocsIndex(searchTerm: string) {
    const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const results = docsIndex.search(match);

    return results
    .map(index => docs[index as number])
    .map(({ id, title, content }) => {
        return { id, title, content };
    });
};