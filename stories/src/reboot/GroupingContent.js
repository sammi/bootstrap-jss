import React from 'react'

export const GroupingContent = () => <div>
  <h1>Grouping content</h1>

  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m.</p>

  <h3>pre</h3>

  <pre>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et me.</pre>

  <pre><code>&lt;html>
  &lt;head>
  &lt;/head>
  &lt;body>
  &lt;div class="main"> &lt;div>
  &lt;/body>
&lt;/html></code></pre>

  <h3>blockquote</h3>

  <blockquote>
    <p>Some sort of famous witty quote marked up with a &lt;blockquote> and a child &lt;p> element.</p>
  </blockquote>

  <blockquote>Even better philosophical quote marked up with just a &lt;blockquote> element.</blockquote>

  <h3>ordered list</h3>

  <ol>
    <li>list item 1</li>
    <li>list item 1
        <ol>
        <li>list item 2</li>
        <li>list item 2
                <ol>
            <li>list item 3</li>
            <li>list item 3</li>
          </ol>
        </li>
        <li>list item 2</li>
        <li>list item 2</li>
      </ol>
    </li>
    <li>list item 1</li>
    <li>list item 1</li>
  </ol>

  <h3>unordered list</h3>

  <ul>
    <li>list item 1</li>
    <li>list item 1
        <ul>
        <li>list item 2</li>
        <li>list item 2
                <ul>
            <li>list item 3</li>
            <li>list item 3</li>
          </ul>
        </li>
        <li>list item 2</li>
        <li>list item 2</li>
      </ul>
    </li>
    <li>list item 1</li>
    <li>list item 1</li>
  </ul>

  <h3>description list</h3>

  <dl>
    <dt>Description name</dt>
    <dd>Description value</dd>
    <dt>Description name</dt>
    <dd>Description value</dd>
    <dd>Description value</dd>
    <dt>Description name</dt>
    <dt>Description name</dt>
    <dd>Description value</dd>
  </dl>

  <h3>figure</h3>

  <figure>
    <img src="./400_200.img" alt="" />
    <figcaption>Figcaption content</figcaption>
  </figure>
</div>
