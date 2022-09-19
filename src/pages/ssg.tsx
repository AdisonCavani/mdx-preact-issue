import { InferGetStaticPropsType } from "next";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = "Some **mdx** text!";
  const mdxSource = await serialize(source);

  return {
    props: { framework: "preact", source: mdxSource },
  };
}

export default function SSGPage({
  framework,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <p>{framework} ssg example</p>
      <div>
        <MDXRemote {...source} />
      </div>
    </div>
  );
}
