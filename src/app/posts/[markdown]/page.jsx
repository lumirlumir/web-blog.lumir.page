import { join } from 'path';

import { DOCS, EXTENSION } from '@/constants/path';
import { readFileForMarkdown, readDirByExtension } from '@/utils/fs';
import markdownToJsx from '@/utils/markdownToJsx';
import markdownToText from '@/utils/markdownToText';

/* Custom Declaration */
const { md, mdRegExp } = EXTENSION;

function getFilePath(params) {
  return join(DOCS, `${params.markdown}${md}`);
}

/* Next.js Declaration */
// Control what happens when a dynamic segment is visited that was not generated with `generateStaticParams`.
export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = await readDirByExtension(DOCS, md, { recursive: true });

  return paths.map(path => ({
    markdown: path.replace(mdRegExp, ''),
  }));
}

export async function generateMetadata({ params }) {
  const { title, description } = await readFileForMarkdown(getFilePath(params), 'data');

  return {
    title: markdownToText(title),
    description: markdownToText(description),
  };
}

export default async function Page({ params }) {
  return <>{await markdownToJsx(getFilePath(params))}</>;
}
