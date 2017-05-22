<template>
<div>
	<ZhihuHead></ZhihuHead>
	<div class="root-style">
		<router-view></router-view>
	</div>
</div>
</template>

<script>
import ZhihuHead from './components/ZhihuHead'
// 引入basscss
require('basscss/css/basscss.min.css')
export default {
	name: 'root',
	components: {
		ZhihuHead
	}
}
</script>

<style>

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
}
ol, ul {
    list-style: none;
}
blockquote {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing:0;
}
a {
    color: inherit;
    text-decoration: none;
}

* {
	margin: 0;
	padding: 0;
}

html {
	font-size: 20px;
}

@media screen and (min-width: 640px) {
	html {
		font-size: 15px;
	}
	.root-style {
		width: 640px;
		margin-left: 50%;
		transform: translateX(-50%);
	}
}
</style>
