import { Article, BlogPost, Product } from "../types";
import { STATIC_IMAGE } from "./constants";

export const AboutSample:Article = {
    title: "about",
    eyecatch: STATIC_IMAGE,
    detail: `
    <h1 id="sample-markdown">Sample Markdown</h1>
    <p>This is some basic, sample markdown.</p>
    <h2 id="second-heading">Second Heading</h2>
    <ul>
    <li>Unordered lists, and:<ol>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    </ol>
    </li>
    <li>More</li>
    </ul>
    <blockquote>
    <p>Blockquote</p>
    </blockquote>
    <p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p>
    <p>And code highlighting:</p>
    <pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>;
    
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{
       <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s;
    }
    </code></pre>
    <p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p>
    <p>Or an image of bears</p>
    <p><img src="http://placebear.com/200/200" alt="bears"></p>
    <p>The end ...</p>`,
};

export const ProductSample:Product = {
    title: "moodle 課題管理",
    description: "moodleをスクレイピングして、課題をTODOリスト化するあぷりです.\n今後通知機能をつけたい",
    href: "https://github.com/zaemon1251-hesty/assignment_management",
    src: "public/vercel.svg"
};

export const ProductsSample:Product[] = [
    ProductSample
];

export const BlogPostSample:BlogPost = {
    id:"1",
    title:"インターン参加しました",
    description:"2021/09/18~21 サイバーエージェントの機械学習＆バックエンド３daysインターンにさんかしました",
    eyecatch:"public/vercel.svg",
    date:new Date(),
    detail:`
    <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
      This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text. The important factor when using filler text is that the text looks realistic otherwise it will not look very good.<br /><br />

      This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 underline transition duration-100">random</a> or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
    </p>

    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">About us</h2>

    <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>

    <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
      <li>This is a section of some simple filler text</li>
      <li>Also known as placeholder text</li>
      <li>It shares some characteristics of a real written text</li>
    </ul>

    <blockquote className="text-gray-500 sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">“This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.”</blockquote>

    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">Features</h2>

    <p className="text-gray-500 sm:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
    `,
};

export const BlogPostsSample:BlogPost[] = [
    BlogPostSample
];