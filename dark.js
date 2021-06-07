if (window.onload) {
  const divs = document.querySelectorAll('div');
// const figures = document.querySelectorAll('figure');
// const elements = [divs, ...figures];
const elements = [divs];

[].forEach.call(elements, function(elms) {
  // do whatever
  // console.log('elms :>> ', elms);
  elms.forEach((ele) => {
    const urlRegex = new RegExp('url|data:image', 'g')
    const bg = getComputedStyle(ele).background
    const bgi = getComputedStyle(ele).backgroundImage
console.log(urlRegex.test(bg) ,  urlRegex.test(bgi), urlRegex.test(bg) || urlRegex.test(bgi))
    if(urlRegex.test(bg) || urlRegex.test(bgi)) {
      // console.log('object :>> ', object);
        ele.style.filter = 'invert(1) hue-rotate(180deg)!important'
        // // element.parentElement.style.filter = 'invert(1) hue-rotate(180deg)!important'
        // // element.style.webkitFilter = 'invert(1) hue-rotate(180deg)!important'
        ele.style.boxShadow = 'none!important'
    };
  })
})
}
