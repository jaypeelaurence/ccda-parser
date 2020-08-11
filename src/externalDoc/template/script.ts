const scripts = [];

scripts.push(`<script type='text/javascript'>`);

scripts.push(`const externalDoc=document.querySelector(".externalDoc");`);
scripts.push(`externalDoc.innerHTML=externalDoc.innerHTML.replace(/&nbsp;/g," ");`);

scripts.push(`</script>`);

const script = scripts.join('');

export { script };
