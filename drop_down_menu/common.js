// https://www.youtube.com/watch?v=eD3TtGoGS9U

for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    span.classList.add('show');
    li.prepend(span);
    span.append(span.nextSibling)
}

tree.onclick = function (event) {
    console.log(event.target.tagName);
    if (event.target.tagName != 'SPAN') return;

    let childrenContainer = event.target.parentNode.querySelector('ul');

    /**
     * если нет вложенных детей!
     */
    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;

    if (childrenContainer.hidden) {
        event.target.classList.add('hide');
        event.target.classList.remove('show');
    }
    else {
        event.target.classList.add('show');
        event.target.classList.remove('hide');
    }


}