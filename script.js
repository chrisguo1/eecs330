function truncateText(name) {
    var texts = document.getElementsByClassName(name);

    for (i = 0; i<texts.length; i++) {
        var array = texts[i].innerHTML.split(' ');
        while(texts[i].scrollHeight > texts[i].offsetHeight) {
            array.pop();
            texts[i].innerHTML = array.join(' ') + '..."';
        }
    }
}
truncateText("story-short");
truncateText("more-story");

        