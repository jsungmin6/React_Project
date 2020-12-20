
// 이벤트 리스터로 윈도우 크기 변화 감지하면 작동

window.addEventListener('resize', onresize)

var onresize = function () {
    const screen_width = screen.availWidth
    const screen_height = screen.availHeight
    const outer_width = window.outerWidth
    const outer_height = window.outerHeight
    const inner_width = window.innerWidth
    const inner_height = window.innerHeight
    const client_width = document.width
    const client_height = document.height

    document.getElementById("screen").innerHTML = `window.screen: ${screen_width}, ${screen_height}`
    document.getElementById("outer").innerHTML = `window.outer: ${outer_width}, ${outer_height}`
    document.getElementById("inner").innerHTML = `window.inner: ${inner_width}, ${inner_height}`
    document.getElementById("clientWidth").innerHTML = `window.clientWidth: ${client_width}, ${client_height}`
};
